const userModeldb = require("../models/userModeldb")
const products = require("../models/Product");
const order = require("../models/Order");
const categories = require("../models/Categories")
const { underConstruction } = require("./mainController");

const api = {
    getUsers: async (req,res) =>{
        try{
            const result = await userModeldb.getAllUsers()
            res.send(result)
        }catch(error){
            throw error;

        }
    },
    countUsers: async (req,res) =>{
        try{
            const result = await userModeldb.getAllUsers()
            let userCount = result.length;
            return userCount;
        }catch(error){
            throw error;

        }
    },
    getUserById: async (req,res) => {
        let id = parseInt(req.params.id);
        if(isNaN(id)) {
            return 'Param not a number'
        } else {
            try {
                const result = await userModeldb.getUserByPkApi(id);
                if(result) {
                    return result;
                } else {
                    res.send('user not found');
                }
            } catch (error) {
                throw error;
            }
        }
    },
    getProducts: async (req,res) =>{
        try{
            const result = await products.getAllProducts()
            return result;
        }catch(error){
            throw error;

        }
    },
    getProductById: async (req,res) => {
        let id = parseInt(req.params.id);
        if(isNaN(id)) {
            res.send('Not a valid ID');
        } else {
            try {
                const result = await products.getProductByIdWithCategorie(id);
                if(result) {
                    return result;
                } else {
                    res.send('product not found');
                }
            } catch (error) {
                throw error;
            }
        }
    },
    getOrders: async (req,res) =>{
        try{
            const result = await order.getOrders()
            if(result) {
                res.send(result)
            } else {
                res.send([0])
            }
        }catch(error){
            throw error;

        }
    },
    
    // userLogged: async (req,res) => {
    //     try {
    //         let user = req.session.userLogged;
    //         const result = await userModeldb.getUserByPkApi(user.id);
    //         return result;
    //     } catch (error) {
    //         throw error;
    //     }
    // }


}

module.exports = api;