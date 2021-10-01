const fs = require('fs');
const utils = require('../src/utils/utils.js');


const User = {

    usersData: './db/usersDatabase.json',

    getUsers: function () {
        return JSON.parse(fs.readFileSync(this.usersData, 'utf-8')) ;
    },

    idGenerator: function () {
        let allUsers = this.findAllUsers();
        let lastUser = allUsers.pop();
        if(lastUser) {
            return lastUser.id + 1;
        } else {
            return 1;
        }
    },

    findAllUsers : function () {
        return this.getUsers();
    },

    findById : function (id) {
        let allUsers = this.findAllUsers();
        let user = allUsers.find(item => item.id == id);
        if(user != undefined) {
            return user;
        } else {
            console.log('User not found');
        }
       
    },

    createUser: function (userData) {
        let allUsers = this.findAllUsers();
        let newUser = {
            id: this.idGenerator(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.usersData, JSON.stringify(allUsers, null, 4));
        return newUser ;
    },

    deleteUser: function (id) {
        let allUsers = this.findAllUsers();
        let finalUsers = allUsers.filter(user => user.id !== id);
        fs.writeFileSync(this.usersData, JSON.stringify(finalUsers, null, 4));
        return true;
    }
}

module.exports = User;
