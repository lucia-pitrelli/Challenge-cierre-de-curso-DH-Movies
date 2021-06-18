const Sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) => {
  const alias = "Migration";
  const col = {
    id: {
      type: dataTypes.INTEGER(10).UNSIGNED, // o sin numero
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    migration: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },

    batch: {
      type: dataTypes.INTEGER(11),
      allowNull: false,
    },
  };

  const config = {
    timestamps: false,
    tableName: "migrations",
    createdAt: "created_at",
    updatedAt: "updated_at",
  };

  const Migration = sequelize.define(alias, col, config);

  Migration.associate = function (models) {
    //  Migration.belongsToMany(models.Movie, {
    //    as: "categorias",
    //   through: "categoryProduct",
    // });
    //  Migration.belongsTo(models.Brand, {
    //    foreignKey: "brand_id",
    //    as: "brand",
    //  });
  };
  return Migration;
};