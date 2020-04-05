const models = require('../models');
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    pid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  });
    Profile.associate = function (models) {
      models.Profile.belongsToMany(models.Role,{through:'ProfileTask'})
  };
  return Profile;
};