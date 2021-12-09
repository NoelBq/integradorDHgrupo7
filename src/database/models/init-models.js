var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _orderdetail = require("./orderdetail");
var _orders = require("./orders");
var _products = require("./products");
var _users = require("./users");
var _testimonials = require("./testimonials");
var _cart = require("./cart");
var _cartdetail = require('./cartdetail')

function initModels(sequelize) {
  var categories = _categories(sequelize, DataTypes);
  var orderdetail = _orderdetail(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var testimonials = _testimonials(sequelize, DataTypes);
  var cart = _cart(sequelize, DataTypes);
  var cartdetail = _cartdetail(sequelize, DataTypes);
  
  
  products.belongsToMany(orders, { as: 'orderId_orders', through: orderdetail, foreignKey: "productId", otherKey: "orderId" });
  products.belongsToMany(cart, { as: 'cartId_cart', through: cartdetail, foreignKey: "productId", otherKey: "cartId" });
  products.belongsTo(categories, { as: "category", foreignKey: "categoryId"});
  categories.hasMany(products, { as: "products", foreignKey: "categoryId"});
  orderdetail.belongsTo(orders, { as: "order", foreignKey: "orderId"});
  orders.hasMany(orderdetail, { as: "orderdetails", foreignKey: "orderId"});
  orderdetail.belongsTo(products, { as: "product", foreignKey: "productId"});
  products.hasMany(orderdetail, { as: "orderdetails", foreignKey: "productId"});
  orders.belongsTo(users, { as: "user", foreignKey: "usersId"});
  cart.belongsTo(users, { as: "user", foreignKey: "usersId"});
  cartdetail.belongsTo(cart, { as: "cart", foreignKey: "cartId"});
  cartdetail.belongsTo(products, { as: "product", foreignKey: "productId"});
  users.hasMany(orders, { as: "orders", foreignKey: "usersId"});
  users.hasMany(cart, { as: "cart", foreignKey: "usersId"});

  return {
    categories,
    orderdetail,
    orders,
    products,
    users,
    testimonials, 
    cart, 
    cartdetail
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
