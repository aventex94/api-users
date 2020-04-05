const models = require('../models');
module.exports = (sequelize, DataTypes) => {
    const Comentario = sequelize.define('Comentario', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        contenido: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    });
    Comentario.associate = function(models) {
       models.Comentario.belongsTo(models.User);
      };
    return Comentario;
};