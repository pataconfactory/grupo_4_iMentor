const { all } = require('express/lib/application');
const fs = require('fs');
const path = require('path');

const Users = {
    fileName: path.join(__dirname, '../data/users.json'),

    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName), 'utf-8');
    },

    findAll: function(){
        return this.getData();
    },

    findByPk: function(id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findByField: function(campo, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[campo] === text);
        return userFound;
    },

    generateID: function() {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop()
        if(lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },

    createUser: function(userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateID(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },

    editUser: function(userData) {
        let avatarDelForms;
        let allUsers = this.findAll();
        if (userData.products) {
            productsJSON = JSON.stringify(userData.products);
            allUsers.forEach(function(usuario){
                if(usuario.id == userData.id){
                    usuario.products = productsJSON;
                }
            });
        }
        if(userData.password){
            allUsers.forEach(function(usuario){
                if(usuario.id == userData.id){
                    usuario.password = userData.password;
                }
            });
        } else {
            avatarDelForms = userData.avatar;
            allUsers.forEach(function(usuario){
                if(usuario.id == userData.id){
                    usuario.first_name = userData.first_name;
                    usuario.last_name = userData.last_name;
                    usuario.date_birth = userData.date_birth;
                    usuario.age = userData.age;
                    usuario.genero = userData.genero;
                    usuario.country = userData.country;
                    usuario.category = userData.category;
                    usuario.title = userData.title;
                    if(avatarDelForms !== null ) {
                        usuario.avatar = avatarDelForms;
                    }
                }
            });
        }
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
    },

    deleteUser: function(id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        console.log(finalUsers)
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
    }
}

module.exports = Users;