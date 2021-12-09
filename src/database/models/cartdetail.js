const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cartdetail', {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
  },
   {
    sequelize,
    tableName: 'cartdetail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "productId" },
          { name: "cartId" },
        ]
      },
      {
        name: "fkProductHasCartCart1Idx",
        using: "BTREE",
        fields: [
          { name: "cartId" },
        ]
      },
      {
        name: "fkProductHasCartProduct1Idx",
        using: "BTREE",
        fields: [
          { name: "productId" },
        ]
      },
    ]
  });
};
