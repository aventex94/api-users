const models = require('../models');
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        uid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        lastName: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$", 'i'],
            }
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$", 'i']
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
            }
        },
    });
    User.associate = function(models) {
        models.User.hasMany(models.Publicacion);
        models.User.hasMany(models.Comentario);
      };
    return User;
};