const Sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  const alias = "Actor";
  const col = {
    id: {
      type: dataTypes.INTEGER(10), // o sin numero
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    first_name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    last_name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },

    rating: Sequelize.DECIMAL,

    favorite_movie_id: {
      type: dataTypes.INTEGER(10),
    },
  };

  const config = {
    timestamps: false,
    tableName: "actors",
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const Actor = sequelize.define(alias, col, config);

  Actor.associate = function (models) {
    Actor.belongsToMany(models.Movie, {
      as: "actorMovie",
      through: "actor_movie",
    });
    Actor.belongsToMany(models.Episode, {
      as: "actorEpisode",
      through: "actor_episode",
    });
  };
  return Actor;
};
