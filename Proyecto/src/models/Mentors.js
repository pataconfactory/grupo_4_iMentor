const { all } = require('express/lib/application');
const fs = require('fs');
const path = require('path');

const Mentors = {
    fileName: path.join(__dirname, '../data/mentors.json'),

    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName), 'utf-8');
    },

    findAll: function(){
        return this.getData();
    },

    findByPk: function(id) {
        let allMentors = this.findAll();
        let mentorFound = allMentors.find(oneMentor => oneMentor.id === id);
        return mentorFound;
    },

    findByField: function(campo, text) {
        let allMentors = this.findAll();
        let mentorFound = allMentors.find(oneMentor => oneMentor[campo] === text);
        return mentorFound;
    },

    generateID: function() {
        let allMentors = this.findAll();
        let lastMentor = allMentors.pop()
        if(lastMentor) {
            return lastMentor.id + 1;
        }
        return 1;
    },

    createMentor: function(mentorData) {
        let allMentors = this.findAll();
        let newMentor = {
            id: this.generateID(),
            ...mentorData
        }
        allMentors.push(newMentor);
        fs.writeFileSync(this.fileName, JSON.stringify(allMentors, null, ' '));
        return newMentor;
    },

    editMentor: function(mentorData) {
        let avatarDelForms;
        let allMentors = this.findAll();
        if (userData.products) {
            productsJSON = JSON.stringify(mentorData.products);
            allMentors.forEach(function(mentor){
                if(mentor.id == mentorData.id){
                    mentor.products = productsJSON;
                }
            });
        }
        if(mentorData.password){
            allMentors.forEach(function(mentor){
                if(mentor.id == mentorData.id){
                    mentor.password = mentorData.password;
                }
            });
        } else {
            avatarDelForms = mentorData.avatar;
            allMentors.forEach(function(mentor){
                if(mentor.id == mentorData.id){
                    mentor.first_namentorme = mentorData.first_name;
                    mentor.last_name = mentorData.last_name;
                    mentor.date_birth = mentorData.date_birth;
                    mentor.age = mentorData.age;
                    mentor.genero = mentorData.genero;
                    mentor.country = mentorData.country;
                    mentor.category = mentorData.category;
                    mentor.title = mentorData.title;
                    if(avatarDelForms !== null ) {
                        mentor.avatar = avatarDelForms;
                    }
                }
            });
        }
        fs.writeFileSync(this.fileName, JSON.stringify(allMentors, null, ' '));
    },

    deleteMentor: function(id) {
        let allMentors = this.findAll();
        let finalMentors = allMentors.filter(oneMentor => oneMentor.id !== id);
        console.log(finalMentors)
        fs.writeFileSync(this.fileName, JSON.stringify(finalMentors, null, ' '));
    }  
}

module.exports = Mentors;