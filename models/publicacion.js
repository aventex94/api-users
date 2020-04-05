const models = require('../models');
module.exports = (sequelize, DataTypes) => {
    const Publicacion = sequelize.define('Publicacion', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true
            }
        },
        contenido: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
            }
        },
        
    });
    Publicacion.associate = function(models) {
        models.Publicacion.hasMany(models.Comentario);
      };
    return Publicacion;
};