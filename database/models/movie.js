const Sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  const alias = "Movie";
  const col = {
    id: {
      type: dataTypes.INTEGER(10), // o sin numero
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    title: {
      type: dataTypes.STRING(500),
      allowNull: false,
    },

    rating: {
      type: dataTypes.DECIMAL.UNSIGNED,
      allowNull: false,
    },

    awards: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
    },

    release_date: {
      type: dataTypes.DATE(6),
      allowNull: false,
    },

    length: Sequelize.INTEGER(10).UNSIGNED,

    genre_id: {
      type: dataTypes.INTEGER(10).UNSIGNED,
    },
  };

  const config = {
    timestamps: false,
    tableName: "movies",
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const Movie = sequelize.define(alias, col, config);

  Movie.associate = function (models) {
    Movie.belongsToMany(models.Actor, {
      as: "movieActors",
      through: "actor_movie",
    });
    Movie.belongsTo(models.Genre, {
      foreignKey: "genre_id",
      as: "genre",
    });
  };
  return Movie;
};
