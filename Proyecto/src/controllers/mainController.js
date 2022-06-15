const path = require('path');
const db = require("../../database/models");
const { validationResult } = require('express-validator');

const mainController = {

    index: function (req, res) {
        res.render('index')
    },

    paginaConstruccion: function (req, res) {
        res.render('paginaEnConstruccion')
    },

    contact: function (req, res) {
        res.cookie();
        return res.render(path.join(__dirname, '../views/contact'))
    },

    processContact: function (req, res) {
        let errors = validationResult(req);
        
        if (errors.errors.length > 0) {
            return res.render(path.join(__dirname, '../views/contact'), {errors: errors.mapped(), old: req.body});
        }

        db.Contact.create({
            contact_user_name: req.body.name,
            contact_user_email: req.body.email,
            phone: req.body.phone,
            contact_message: req.body.message
        })
        .then((contacto) => {
            return res.redirect('/contact/sent');
        });
    },

    contactSent: function (req, res) {
        res.cookie();
        return res.render(path.join(__dirname, '../views/contactSent'))
    }

 }

module.exports = mainController;