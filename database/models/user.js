const Sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  const alias = "User";
  const col = {
    id: {
      type: dataTypes.INTEGER(10),
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

    rol: {
      type: dataTypes.STRING(20),
    },
  };

  const config = {
    timestamps: false,
    tableName: "users",
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const User = sequelize.define(alias, col, config);

  return User;
};
