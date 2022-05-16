"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const types_1 = require("sequelize/types");
const db_1 = require("../database/db");
class Usuario extends types_1.Model {
}
exports.Usuario = Usuario;
Usuario.init({
    nombre: {
        type: types_1.DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: types_1.DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: types_1.DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: types_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: "usuarios",
    sequelize: db_1.database,
    timestamps: true
});
