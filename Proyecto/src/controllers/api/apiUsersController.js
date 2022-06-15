const path = require('path');
const db = require("../../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

const apiUsersController = {
    list: (req, res) => {
        db.User.findAll({
            include: [
                {association: "roles"},
                {association: "users"},
                {association: "users_products"}
            ],
            order:[['user_id', 'ASC']]
        })
        .then(users => {
            let usuarios = [];
            let usuario;
            for (const oneUser of users) {
                usuarios.push(
                   usuario = {
                    id: oneUser.user_id,
                    name: oneUser.first_name +" "+ oneUser.last_name,
                    email: oneUser.email,
                    detail: 'http://localhost:3001/api/users/'+oneUser.user_id
                })
            }

            let respuesta = {
                status : 200,
                count: users.length,
                users: usuarios
            }
                res.json(respuesta);
            })
    },
    
    detail: (req, res) => {
        db.User.findByPk(req.params.id, {
            include: [
                {association: "roles"},
                {association: "users"},
                {association: "bookings_user"},
                {association: "users_products"},
            ]
        })
        .then(user => {
            let idMentor = user.mentor_id;
            if(idMentor == 0){
                let respuesta = {
                    id: user.user_id,
                    nombre: user.first_name,
                    apellido: user.last_name,
                    nombre_de_usuario: user.user_name,
                    email: user.email,
                    fecha_de_nacimiento: user.birthday,
                    edad: user.age,
                    género: user.genre,
                    país: user.country,
                    título: user.title,
                    imagen_de_perfil: 'http://localhost:3001/api/users/'+user.user_id+'/'+user.avatar
                }
                res.json(respuesta);
            }

            if(idMentor != 0){
                let respuesta = {
                    id: user.user_id,
                    nombre: user.first_name,
                    apellido: user.last_name,
                    nombre_de_usuario: user.user_name,
                    email: user.email,
                    fecha_de_nacimiento: user.birthday,
                    edad: user.age,
                    género: user.genre,
                    país: user.country,
                    título: user.title,
                    id_mentor: user.mentor_id,
                    imagen_de_perfil: '/img/avatars/'+user.avatar
                }
                res.json(respuesta);
            }    
        });
    }

    
};

module.exports = apiUsersController;