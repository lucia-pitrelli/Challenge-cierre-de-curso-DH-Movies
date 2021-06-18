const Sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  const alias = "User";
  const col = {
    id: {
      type: dataTypes.INTEGER(10), // o sin numero
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name: {
      type: dataTypes.STRING(255), // varchar?
      allowNull: false,
    },

    email: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },

    password: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },

    remember_token: {
      type: dataTypes.STRING(100),
    },

    //falta colocar rol
  };

  const config = {
    timestamps: false,
    tableName: "users",
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const User = sequelize.define(alias, col, config);

  User.associate = function (models) {
    // Episode.belongsToMany(models.Movie, {
    //    as: "categorias",
    //   through: "categoryProduct",
    //});
    //  Actor.belongsTo(models.Brand, {
    //    foreignKey: "brand_id",
    //    as: "brand",
    //  });
  };
  return User;
};
