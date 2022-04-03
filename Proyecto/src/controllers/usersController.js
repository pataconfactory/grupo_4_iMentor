const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');

let usersJSON = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8');
let users = JSON.parse (usersJSON);

const usersController = {

processRegister: (req,res) => {
    
},



}

module.exports = usersController;