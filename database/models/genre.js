const Sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  const alias = "Genre";
  const col = {
    id: {
      type: dataTypes.INTEGER(10), // o sin numero
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name: Sequelize.STRING(100),

    ranking: {
      type: dataTypes.INTEGER(10),
      allowNull: false,
    },

    active: {
      type: dataTypes.TINYINT(1),
      allowNull: false,
    },
  };

  const config = {
    timestamps: false,
    tableName: "genres",
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const Genre = sequelize.define(alias, col, config);

  return Genre;
};
