const path = require('path');
const fs = require('fs');
const res = require('express/lib/response');

const {validationResult} = require('express-validator');
const Users = require('../models/Users');
const Mentors = require('../models/Mentors');
const bcrypt = require('bcryptjs');
const bcryptjs = require('bcryptjs');
const db = require("../../database/models");

const usersController = {
    listUsers: function (req, res) {
        db.User.findAll({
            include: [
                {association: "roles"},
                {association: "users"},
                {association: "users_products"}
            ]
        })
        .then(function(users){
            res.render(path.join(__dirname, '../views/users/listUsers'),{users})
        })
    },

    detailUsers: function(req, res) {
        let ver = req.params;
        console.log(ver)
        db.User.findByPk(req.params.id, {include: [
                {association: "roles"},
                {association: "users"},
                {association: "bookings_user"},
                {association: "users_products"},
            ]
        }).then(function(user){
                console.log(user)
                return res.render(path.join(__dirname, '../views/users/userDetail'), {user})
        })
    },

    register: function(req,res) {
        res.cookie()
        db.Role.findAll({
            include: [
                {association: "roles"}
            ]
        })
        .then(function(roles) {
            return res.render(path.join(__dirname, '../views/users/register'), {roles})
        })
    },

    login: function(req, res) {
        return res.render(path.join(__dirname, '../views/users/login'))
    },

    loginProcess: function(req, res) {
        let errors= validationResult(req);
        if(errors.errors.length > 0){
            return res.render(path.join(__dirname, '../views/users/login'), {errors: errors.mapped(), old: req.body});
        }

        db.User.findOne({
            where:{
                email: req.body.email
            }
        }).then((userToLogin) => {
            let user = userToLogin.dataValues;
            if(user){
                let isOkPassword = bcryptjs.compareSync(req.body.password, user.password);
                if(isOkPassword){
                    delete user.password;
                    req.session.userLogged = user;
                    if(req.body.remember) {
                        res.cookie('userEmail', req.body.email, {maxAge: (1000 * 300)});
                    }
                    return res.redirect('/users/profile');
                }
                return res.render(path.join(__dirname, '../views/users/login'), {errors: {password: {msg: 'Las credenciales son inválidas'}}, old: req.body});
            }
            return res.render(path.join(__dirname, '../views/users/login'), {errors: {email: {msg: 'No se encuentra este email en nuestra base de datos'}}, old: req.body});
         })
    },

    processRegister: function (req, res) {
        let errors= validationResult(req);
        if(errors.errors.length > 0){
            return res.render(path.join(__dirname, '../views/users/register'), {errors: errors.mapped(), old: req.body});
        }

        let userEmailInDB = Users.findByField('email', req.body.email);
        if(userEmailInDB == undefined){
            userEmailInDB = Mentors.findByField('email', req.body.email);
        }
        if(userEmailInDB) {
            return res.render(path.join(__dirname, '../views/users/register'), {errors: {email: {msg: 'Este email ya se encuentra registrado'}}, old: req.body});
        }

        let userNameInDB = Users.findByField('user_name', req.body.user_name);
        if(userNameInDB == undefined){
            userNameInDB = Mentors.findByField('user_name', req.body.email);
        }
        if(userNameInDB) {
            return res.render(path.join(__dirname, '../views/users/register'), {errors: {user_name: {msg: 'Este nombre de usuario ya se encuentra registrado'}}, old: req.body});
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            products: [0],
            avatar: req.file.filename
        }

        if((req.body.category == 'Usuario') || (req.body.category == 'Administrador')) {
            let userCreated = Users.createUser(userToCreate);
            return res.redirect('/users/login');
        }

        if(req.body.category == 'Mentor') {
            let mentorCreated = Mentors.createMentor(userToCreate);
            return res.redirect('/users/login');
        }
        
    }, 

    profile: function(req, res) {
        let id = req.session.userLogged.user_id;
        db.User.findByPk(id, {include: [
                {association: "roles"},
                {association: "users"},
                {association: "bookings_user"},
                {association: "users_products"},
            ]
        }).then(function(user){
            console.log(user)
            return res.render(path.join(__dirname, '../views/users/profile'), {user});
        })
    },

    logout: function(req, res) {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },

    editUsers: function(req, res) {
        return res.render(path.join(__dirname, '../views/users/userEdit'), {user: req.session.userLogged});
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

        if((req.body.category == 'Usuario') || (req.body.category == 'Administrador')) {
            let userEdited = Users.editUser(userToEdit);
            return res.redirect('/users/profile');
        }

        if(req.body.category == 'Mentor') {
            let mentorEdited = Mentors.editMentor(userToEdit);
            return res.redirect('/users/profile');
        }
    },

    editUsersPassword: function(req, res) {
        return res.render(path.join(__dirname, '../views/users/userEditPassword'), {user: req.session.userLogged});
    },

    updateUsersPassword: function(req, res) {
        let errors= validationResult(req);
        if(errors.errors.length > 0){
            return res.render(path.join(__dirname, '../views/users/userEditPassword'), {errors: errors.mapped(), old: req.body});
        }

        let user = Users.findByField('email', req.params.email);
        if (user == undefined) {
            user = Mentors.findByField('email', req.params.email);
        }

        let isOkPassword = bcryptjs.compareSync(req.body.password_old, user.password);
        if(isOkPassword){
            let userToEdit = {
                id: req.params.id,
                password: bcryptjs.hashSync(req.body.password, 10)
            }
            if((user.category == 'Usuario') || (user.category == 'Administrador')) {
                let userEdited = Users.editUser(userToEdit);
                return res.redirect('/users/profile');
            }
            if (user.category == 'Mentor'){
                let mentorEdited = Mentors.editMentor(userToEdit);
                return res.redirect('/users/profile');
            }
        } else {
            return res.render(path.join(__dirname, '../views/users/userEditPassword'), {errors: {password_old: {msg: 'Las credenciales son inválidas'}}, old: req.body});
        }
    },

    destroyUsers: function(req, res) {
        let user = Users.findByField('email', req.params.email);
        if (user == undefined) {
            let mentor = Mentors.findByField('email', req.params.email);
            let idMentorToDelete = parseInt(req.params.id);
            let mentorRemoved = Mentors.deleteMentor(idMentorToDelete);
            return res.redirect('/users/list');
        }
        let idUserToDelete = parseInt(req.params.id);
        let userRemoved = Users.deleteUser(idUserToDelete);
        return res.redirect('/users/list');
    }
};

module.exports = usersController;