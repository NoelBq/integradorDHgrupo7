
const product = require("../models/Product");
const categories = require('../models/Categories');
const testimonials = require('../models/Testimonials')
const fs = require('fs');
const { ResultWithContext } = require("express-validator/src/chain");

const mainController = {
	home: async(req, res) => {
		try {
			let productsInCart = 0
			let user = req.session.userLogged; 
			if(user) {
			  productsInCart = await product.getAmountProductsByUser(user.id)
			}
			const testimonialsDTO = await testimonials.getTestimonials();
			res.render("home", { testimonials: testimonialsDTO , user: req.session.userLogged, productsInCart});
			
		} catch (error) {
			console.log(error);
		}
	},
	login: (req, res) => {
		res.render("formlogin", {registered: req.query.registered, user: req.session.userLogged});
	},
	register: (req, res) => {
		res.render("formregister", {user: req.session.userLogged });
	},
	terms: (req, res) => {
		res.render("terms", {user: req.session.userLogged });
	},
	shop: async (req, res) => {
		try {
			let productsInCart = 0
			let user = req.session.userLogged; 
			if(user) {
			  productsInCart = await product.getAmountProductsByUser(user.id)
			}
			const products = await product.getAllProducts();
			const testimonialsDTO = await testimonials.getTestimonials();
			res.render("shop", { testimonials: testimonialsDTO, products: products, user: req.session.userLogged, productsInCart : productsInCart });
			
		} catch (error) {
			console.log(error);
		}
	},
	shopDonas: async (req, res) => {
		let productsInCart = 0
		let user = req.session.userLogged; 
		if(user) {
		  productsInCart = await product.getAmountProductsByUser(user.id)
		}
		const products = await product.getAllProducts();
		const testimonialsDTO = await testimonials.getTestimonials();
		res.render("shopDonas", {
			testimonials: testimonialsDTO,
			products: products,
			user: req.session.userLogged,
			productsInCart : productsInCart
		});
	},
	shopCookies: async (req, res) => {
		try {
			let productsInCart = 0
			let user = req.session.userLogged; 
			if(user) {
			  productsInCart = await product.getAmountProductsByUser(user.id)
			}
			let products = await product.getAllProducts();
			const testimonialsDTO = await testimonials.getTestimonials();
			res.render("shopCookies", {
				testimonials: testimonialsDTO,
				products: products,
				user: req.session.userLogged,
				productsInCart : productsInCart
			});
			
		} catch (error) {
			console.log(error);
		}
	},
	shopHelados: async (req, res) => {
		try {
			let productsInCart = 0
			let user = req.session.userLogged; 
			if(user) {
			  productsInCart = await product.getAmountProductsByUser(user.id)
			}
			  let products = await product.getAllProducts();
			  const testimonialsDTO = await testimonials.getTestimonials();
			  res.render("shopHelados", {
				  testimonials: testimonialsDTO,
				  products: products,
				  user: req.session.userLogged,
				  productsInCart : productsInCart
			  });
				
		} catch (error) {
			console.log(error);
		}
	},
	underConstruction: (req, res) => {
		res.render("underconstruction"), {user: req.session.userLogged};
	},
	adminpanel: async (req, res) => {
		let productsData;
		let categoriesData;
		let selectedCategory = parseInt(req.query.categorySelection);
		try {
			categoriesData = await categories.getAllCategories();
			if(isNaN(selectedCategory)) {
				selectedCategory = false;
			}
			if(selectedCategory) {
				productsData = await product.getProductByCategoryId(selectedCategory);
			} else {
				productsData = await product.getAllProducts();
			}
			
		} catch (error) {
			console.log(error)
		}
		res.render("adminpanel", { 
			products: productsData, 
			categories: categoriesData, 
			user: req.session.userLogged
		});

	},
	formsadmin: (req, res) => {
		res.render("formsadmin", {user: req.session.userLogged});
	},

};

module.exports = mainController;