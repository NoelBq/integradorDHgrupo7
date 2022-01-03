const Sequelize = require('sequelize');
const Category = require('./categories');
module.exports = function(sequelize, DataTypes) {
  const Products = sequelize.define('products', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    productName: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fkProductCategoriesÏdx",
        using: "BTREE",
        fields: [
          { name: "categoryId" },
        ]
      },
    ]
  });
  Products.belongsTo(sequelize.models.categories, {as: 'Category', foreignKey: 'categoryId'});
  return Products;
};
