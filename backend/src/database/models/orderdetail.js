const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_detail', {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'order_detail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "productId" },
          { name: "orderId" },
        ]
      },
      {
        name: "fkProductHasOrderOrder1Idx",
        using: "BTREE",
        fields: [
          { name: "orderId" },
        ]
      },
      {
        name: "fkProductHasOrderProduct1Idx",
        using: "BTREE",
        fields: [
          { name: "productId" },
        ]
      },
    ]
  });
};
