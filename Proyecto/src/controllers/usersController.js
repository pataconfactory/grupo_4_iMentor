const path = require('path');
const fs = require('fs');
const User = require('../models/Users');
const res = require('express/lib/response');

const {validationResult} = require('express-validator');
const Users = require('../models/Users');
const bcrypt =require('bcryptjs');
const bcryptjs = require('bcryptjs');

let usersJSON = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8');
let users = JSON.parse (usersJSON);

const usersController = {

    register: function(req, res) {
        res.cookie()
        res.render(path.join(__dirname, '../views/users/register'))
    },

    login: function(req, res) {
        res.render(path.join(__dirname, '../views/users/login'))
    },

    loginProcess: function(req, res) {
        let errors= validationResult(req);
        if(errors.errors.length > 0){
            return res.render(path.join(__dirname, '../views/users/login'), {errors: errors.mapped(), old: req.body});
        }

        let userToLogin = Users.findByField('email', req.body.email);
        if(userToLogin){
            let isOkPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(isOkPassword){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                if(req.body.remember) {
                    res.cookie('userEmail', req.body.email, {maxAge: (1000 * 300)});
                }
                return res.redirect('/users/profile');
            }
            return res.render(path.join(__dirname, '../views/users/login'), {errors: {password: {msg: 'Las credenciales son inválidas'}}, old: req.body});
        }
        return res.render(path.join(__dirname, '../views/users/login'), {errors: {email: {msg: 'No se encuentra este email en nuestra base de datos'}}, old: req.body});
    },

    processRegister: function (req, res) {
        let errors= validationResult(req);
        if(errors.errors.length > 0){
            return res.render(path.join(__dirname, '../views/users/register'), {errors: errors.mapped(), old: req.body});
        }

        let userEmailInDB = Users.findByField('email', req.body.email);
        if(userEmailInDB) {
            return res.render(path.join(__dirname, '../views/users/register'), {errors: {email: {msg: 'Este email ya se encuentra registrado'}}, old: req.body});
        }

        let userNameInDB = Users.findByField('user_name', req.body.user_name);
        if(userNameInDB) {
            return res.render(path.join(__dirname, '../views/users/register'), {errors: {user_name: {msg: 'Este nombre de usuario ya se encuentra registrado'}}, old: req.body});
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }

        let userCreated = Users.createUser(userToCreate);
        return res.redirect('/users/login');
    }, 

    profile: function(req, res) {
        res.render(path.join(__dirname, '../views/users/profile'), {user: req.session.userLogged});
    },

    logout: function(req, res) {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },

    editUsers: function(req, res) {
        res.render(path.join(__dirname, '../views/users/userEdit'), {user: req.session.userLogged});
    },

    updateUsers: function(req, res) {
        let errors= validationResult(req);
        if(errors.errors.length > 0){
            return res.render(path.join(__dirname, '../views/users/userEdit'), {errors: errors.mapped(), old: req.body});
        }

        let file;
        if(req.file !== undefined){
            file = req.file.filename;
        } else {
            file = null;
        }

        let userToEdit = {
            id: req.params.id,
            ...req.body,
            avatar: file
        }

        let userEdited = Users.editUser(userToEdit);
        return res.redirect('/users/profile');
    },

    editUsersPassword: function(req, res) {
        res.render(path.join(__dirname, '../views/users/userEditPassword'), {user: req.session.userLogged});
    },

    updateUsersPassword: function(req, res) {
        let errors= validationResult(req);
        if(errors.errors.length > 0){
            return res.render(path.join(__dirname, '../views/users/userEditPassword'), {errors: errors.mapped(), old: req.body});
        }

        let id = parseInt(req.params.id);
        let user = Users.findByPk(id);
        let isOkPassword = bcryptjs.compareSync(req.body.password_old, user.password);
        if(isOkPassword){
            let userToEdit = {
                id: req.params.id,
                password: bcryptjs.hashSync(req.body.password, 10)
            }
            let userEdited = Users.editUser(userToEdit);
            return res.redirect('/users/profile');
        } else {
            return res.render(path.join(__dirname, '../views/users/userEditPassword'), {errors: {password_old: {msg: 'Las credenciales son inválidas'}}, old: req.body});
        }
    }
};

module.exports = usersController;