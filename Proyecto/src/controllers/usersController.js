const path = require('path');
const fs = require('fs');
const User = require('../models/Users');
const res = require('express/lib/response');

const {validationResult} = require('express-validator');

let usersJSON = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8');
let users = JSON.parse (usersJSON);

const usersController = {

    register: function(req, res) {
       res.render(path.join(__dirname, '../views/users/register'))
    },

    login: function(req, res) {
        res.render(path.join(__dirname, '../views/users/login'))
    },

    processRegister: function (req, res) {
        let errors= validationResult(req);
        if(errors.errors.length > 0){
            res.render(path.join(__dirname, '../views/users/register'), {errors: errors.mapped(), old: req.body});
        }

        return res.render(path.join(__dirname, '../views/users/login'))
    }, 

    profile: function(req, res) {
        res.render(path.join(__dirname, '../views/users/profile'))
    }
};

module.exports = usersController;
