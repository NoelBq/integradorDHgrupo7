const testimonialsDB = require("../../db/testimonialDatabase.json");
const product = require("../models/Product");
const categories = require('../models/Categories');
const testimonials = require('../models/Testimonials')
const utils = require("../utils/utils");
const fs = require("fs");
const path = require("path");
const { ResultWithContext } = require("express-validator/src/chain");

const mainController = {
	home: async(req, res) => {
		const testimonialsDTO = await testimonials.getTestimonials();
		res.render("home", { testimonials: testimonialsDTO , user: req.session.userLogged });
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
		const products = await product.getAllProducts();
		const testimonialsDTO = testimonials.getTestimonials();
		res.render("shop", { testimonials: testimonialsDTO, products: products, user: req.session.userLogged });
	},
	shopDonas: async (req, res) => {
		const products = await product.getAllProducts();
		const testimonialsDTO = testimonials.getTestimonials();
		res.render("shopDonas", {
			testimonials: testimonialsDTO,
			products: products,
			user: req.session.userLogged
		});
	},
	shopCookies: async (req, res) => {
		let products = await product.getAllProducts();
		const testimonialsDTO = testimonials.getTestimonials();
		res.render("shopCookies", {
			testimonials: testimonialsDTO,
			products: products,
			user: req.session.userLogged
		});
	},
	shopHelados: async (req, res) => {
		const products = await product.getAllProducts();
		const testimonialsDTO = testimonials.getTestimonials();
		res.render("shopHelados", {
			testimonials: testimonialsDTO,
			products: products,
			user: req.session.userLogged
		});
	},
	underConstruction: (req, res) => {
		res.render("underconstruction"), {user: req.session.userLogged};
	},
	adminpanel: async (req, res) => {
		let productsData;
		let categoriesData;
		let selectedCategory = parseInt(req.query.categorySelection);
		console.log(req.query.categorySelection);
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
	checkout: (req, res) => {
		res.render("checkout", {user: req.session.userLogged});
	}
};

module.exports = mainController;