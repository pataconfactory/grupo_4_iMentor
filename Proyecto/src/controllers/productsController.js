const path = require('path');
const fs = require('fs');

let productsJSON = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8');
let products = JSON.parse (productsJSON);

const productsController = {

    products: function(req, res) {
       res.render(path.join(__dirname, '../views/products/products'), {products})
    },

    create: function(req, res) {
        res.render(path.join(__dirname, '../views/products/productCreate'))
    },

    store: function(req, res) {
        let ultimoProducto = products.pop();
        let idUltimoProducto = ultimoProducto.id;
        let newProduct = req.body;
        newProduct.mentor_avatar = null;
        let filename = req.file.filename;
        newProduct.image = filename;
        newProduct.id = idUltimoProducto + 1;
        products.push(ultimoProducto);
        products.push(newProduct);
        let newProductsJSON = JSON.stringify(products);
        console.log(newProductsJSON); /*Se ve en la Terminal*/
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), newProductsJSON);
		res.redirect('/products/');
    },

    detail: function(req, res) {
        let idProducto = req.params.id;
        let productoRequerido = {};
        for(let i=0; i<products.length; i++){
            if(products[i].id == idProducto){
                let productoRequerido = products[i];  
                res.render(path.join(__dirname, '../views/products/detail'), {productoRequerido})
            }
        }  
    },

    edit: function(req, res) {
        let idProducto = req.params.id;
        let productoEditar = {};
        for(let i=0; i<products.length; i++){
            if(products[i].id == idProducto){
                let productoEditar = products[i];  
                res.render(path.join(__dirname, '../views/products/productEdition'), {productoEditar})
            }
        }  
    },

    update: function(req, res) {
        let idProducto = req.params.id;
        let productEnviado = req.body;
        let file = req.file;
		products.forEach(function (elemento){
			if (elemento.id == idProducto) {
				elemento.name = productEnviado.name;
				elemento.description = productEnviado.description;
				elemento.service = productEnviado.service;
                elemento.category = productEnviado.category;
				elemento.mentor = productEnviado.mentor;
                elemento.mentor_country = productEnviado.country;
                elemento.mentor_titulo = productEnviado.titulo;
                elemento.duration = productEnviado.duration;
                elemento.horario = productEnviado.horario;
                elemento.price = productEnviado.price;
                elemento.discount = productEnviado.discount;
                if(file !== undefined){
                    const filename = req.file.filename;
                    elemento.image = filename;
                }
			}
		});
        let productsJSON = JSON.stringify(products);
        console.log(productsJSON);
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), productsJSON);
        res.redirect('/products/');
    },

    destroy: function(req, res) {
        let idProducto = req.params.id;
        let productoEliminar = {};
        for(let i=0; i<products.length; i++){
            if(products[i].id == idProducto){
                productoEliminar = products[i];   
            }
        };
        products = products.filter(function (elemento){
			return (elemento != productoEliminar);
        });
        let productsJSON = JSON.stringify(products);
        console.log(productsJSON);
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), productsJSON);
        res.redirect('/products/');
    },

    productServices: function(req, res) {
        res.render(path.join(__dirname, '../views/products/productServices'))
    },

    productCart: function(req, res) {
        res.render(path.join(__dirname, '../views/products/productCart'))
    },

    /*search:*/
};

module.exports = productsController;