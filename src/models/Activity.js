const { DataTypes } = require('sequelize');

// Actividad Turística con las siguientes propiedades:
// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.ENUM('1','2','3','4','5'),
        },
        duration: {
            type: DataTypes.STRING,
        },
        season: {
            type: DataTypes.ENUM('Summer', 'Fall','Winter', 'Spring'),
            allowNull: false
        },
      
       
    },{
        timestamps: false,
    });
};

