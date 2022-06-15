const path = require('path');
const {validationResult} = require('express-validator');
const db = require('../../database/models');
const Op = db.Sequelize.Op;

const productCartController = {
    productCart: function(req, res) {
        let userId = req.session.userLogged.user_id;

        let products = db.Product.findAll({
            include: [
                {association: "mentors"},
                {association: "categories"},
                {association: "users_products"}
            ]
        });

        let bookings = db.Booking.findAll({
            include: [
                {association: "product_booking"},
                {association: "user_booking"},
                {association: "invoices_booking"}
            ], where:{
                user_id: {[Op.like]: userId}
            }
        });
        
        let users = db.User.findAll({
            include: [
                {association: "roles"},
                {association: "users"},
                {association: "users_products"}
            ]
        });

        let invoices = db.Invoice.findAll({
            include: [
                {association: "booking_invoice"},
            ]
        });
        
        Promise.all([products, bookings, users, invoices])
        .then(function([products, bookings, users, invoices]) {
            let reservas = bookings;
            let facturas = invoices;
            if(reservas.length == 0){
                return res.render(path.join(__dirname, '../views/products/productCart'), {products})
            } else if(reservas.length > 0) {
                if(facturas == 0){
                    let cifras = {};
                    let subTotal = 0;
                    for(oneReserva of reservas) {
                        subTotal = subTotal + parseInt(oneReserva.price_to_pay);
                    }
                    cifras.subTotal = subTotal;
                    
                    let iva = (( subTotal * 21) / 100);
                    cifras.iva = iva;

                    let total = subTotal + iva;
                    cifras.total = total;

                    return res.render(path.join(__dirname, '../views/products/productCart'), {products, bookings, users, cifras}) 
                } else if(facturas.length > 0) {
                    let cifras = {};
                    let subTotal = 0;
                    let reservas_sin_pagar = [];
                    
                    let array_id_facturas = [];
                    for(oneFactura of facturas){
                        array_id_facturas.push(oneFactura.booking_id)
                    }

                    let resultado;
                    for(oneReserva of reservas) { 
                        resultado = array_id_facturas.includes(oneReserva.booking_id)
                        if(!resultado){
                            subTotal = subTotal + parseInt(oneReserva.price_to_pay);  
                            reservas_sin_pagar.push(oneReserva.booking_id)
                        }
                    }
                    
                    if(reservas_sin_pagar == 0){
                        return res.render(path.join(__dirname, '../views/products/productCart'), {products, bookings, invoices})
                    } else if(reservas_sin_pagar.length > 0){
                        cifras.subTotal = subTotal;
                    
                        let iva = (( subTotal * 21) / 100);
                        cifras.iva = iva;

                        let total = subTotal + iva;
                        cifras.total = total;
                    
                        return res.render(path.join(__dirname, '../views/products/productCart'), {products, bookings, users, invoices, cifras, reservas_sin_pagar}) 
                    }
                }
            } 
        })
    },
    
    productCartAdd: function(req, res) {
        let productId = req.params.id;
        let userId = req.session.userLogged.user_id;

        db.Product.findByPk(productId, {
            include: [
                {association: "mentors"},
                {association: "categories"},
                {association: "users_products"}
            ]
        })
        .then(function(product) { 
            let price = parseInt(product.price);

            db.Booking.create({
                user_id: userId,
                product_id: productId,
                quantity: 1,
                price_to_pay: price
            }).then((product) => {
                return res.redirect('/products/productCart');
            });
        })
    },

    productCartDestroy: function(req, res) {
        let bookingId = req.params.id;
        
        db.Booking.destroy({
            where: {
                booking_id: bookingId
            }
        }).then(function(product){
            return res.redirect('/products/productCart');
        })
    },

    productsToPay: function(req, res) {
        let userId = req.params.id;
        console.log(req.body)

        let bookings = db.Booking.findAll({
            include: [
                {association: "product_booking"},
                {association: "user_booking"},
                {association: "invoices_booking"}
            ], where:{
                user_id: {[Op.like]: userId}
            }
        });
        let invoices = db.Invoice.findAll({
            include: [
                {association: "booking_invoice"},
            ]
        });
        
        Promise.all([bookings, invoices])
        .then(function([bookings, invoices]) {
            let array_id_facturas = [];
            for(oneInvoice of invoices){
                array_id_facturas.push(oneInvoice.booking_id)
            }

            let reservas= [];
            for (const oneBooking of bookings) {
                reservas.push(
                    producto = {
                        booking_id: oneBooking.booking_id,
                        price_to_pay: oneBooking.price_to_pay
                    }
                );
            }
            
            let subTotal; 
            let iva; 
            let total;
            let resultado;
            for(let i=0; i< reservas.length; i++) {
                resultado = array_id_facturas.includes(reservas[i].booking_id)
                if(!resultado){
                    subTotal = parseInt(reservas[i].price_to_pay);
                    iva = (( subTotal * 21) / 100);
                    total = subTotal + iva;
                    //iva = iva.toString();
                    //total = total.toString();
                    
                    //console.log(subTotal)
                    //console.log(iva)
                    //console.log(total)
                    db.Invoice.create({
                        booking_id: reservas[i].booking_id,
                        payment_method: req.body.metodo_pago,
                        subtotal: subTotal,
                        iva: iva,
                        total: total
                    })
                }
            }
            return res.redirect('/products/productInvoice');     
        }) 
    }
};

module.exports = productCartController;