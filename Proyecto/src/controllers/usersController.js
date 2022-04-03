const path = require('path');
const fs = require('fs');
const User = require('../models/Users');
const res = require('express/lib/response');

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
        res.send({
            body: req.body,
            file: req.file
        
        })
        }, 

    profile: function(req, res) {
        res.render(path.join(__dirname, '../views/users/profile'))
    }
};

module.exports = usersController;
