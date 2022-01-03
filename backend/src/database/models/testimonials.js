module.exports = function(sequelize, DataTypes) {
  return sequelize.define('testimonials', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    review: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING(45),
      allowNull: false
    },

  }, {
    sequelize,
    tableName: 'testimonials',
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
    ]
  });
};
