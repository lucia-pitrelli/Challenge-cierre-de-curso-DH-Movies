const Sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  const alias = "Episode";
  const col = {
    id: {
      type: dataTypes.INTEGER(10), // o sin numero
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    title: Sequelize.STRING(500),

    number: Sequelize.INTEGER(10),

    release_date: {
      type: dataTypes.DATE,
      allowNull: false,
    },

    rating: {
      type: dataTypes.DECIMAL,
      allowNull: false,
    },

    season_id: {
      type: dataTypes.INTEGER(10),
    },
  };

  const config = {
    timestamps: false,
    tableName: "episodes",
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const Episode = sequelize.define(alias, col, config);

  Episode.associate = function (models) {
    Episode.belongsToMany(models.Movie, {
      as: "episodeMovie",
      through: "actor_episode",
    });
    Episode.belongsTo(models.Season, {
      foreignKey: "season_id",
      as: "allSeason",
    });
  };
  return Episode;
};
