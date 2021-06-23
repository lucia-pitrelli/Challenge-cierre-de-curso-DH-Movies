const Sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  const alias = "Season";
  const col = {
    id: {
      type: dataTypes.INTEGER(10), // o sin numero
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    title: Sequelize.STRING(500),

    number: Sequelize.INTEGER(10).UNSIGNED,

    release_date: {
      type: dataTypes.DATE,
      allowNull: false,
    },

    end_date: {
      type: dataTypes.DATE,
      allowNull: false,
    },

    serie_id: {
      type: dataTypes.INTEGER(10).UNSIGNED,
    },
  };

  const config = {
    timestamps: false,
    tableName: "seasons",
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const Season = sequelize.define(alias, col, config);

 // Season.associate = function (models) {
  //  Season.belongsTo(models.Serie, {
   //   foreignKey: "serie_id",
   //   as: "allSerie",
   // });
 // };
  return Season;
};
