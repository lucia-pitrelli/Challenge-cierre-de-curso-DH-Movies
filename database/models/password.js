const Sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  const alias = "Password";
  const col = {
    email: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },

    token: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
  };

  const config = {
    timestamps: false,
    tableName: "password_resets",
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const Password = sequelize.define(alias, col, config);

  Password.associate = function (models) {
    // Episode.belongsToMany(models.Movie, {
    //    as: "categorias",
    //   through: "categoryProduct",
    //});
    //  Actor.belongsTo(models.Brand, {
    //    foreignKey: "brand_id",
    //    as: "brand",
    //  });
  };
  return Password;
};