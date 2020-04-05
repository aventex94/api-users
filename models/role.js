'use strict';
const models = ('../models');
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    rid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
  },
    name: DataTypes.TEXT
  }, {});
  Role.associate = function (models) {
    Role.belongsToMany(models.Profile,{through:'ProfileTask'});
  };
  return Role;
};