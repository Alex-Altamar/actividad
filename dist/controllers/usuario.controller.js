"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const Usuario_1 = require("../models/Usuario");
class UsuarioController {
    getAllUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield Usuario_1.Usuario.findAll(); // select * from usuarios;
                res.status(200).json({ user });
            }
            catch (error) {
            }
        });
    }
    get0neUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    createUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    updateUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    deleteUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.UsuarioController = UsuarioController;
