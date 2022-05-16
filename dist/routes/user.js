"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRoutes = void 0;
const usuario_controller_1 = require("../controllers/usuario.controller");
class UsuarioRoutes {
    constructor() {
        this.usuarioController = new usuario_controller_1.UsuarioController();
    }
    routes(app) {
        app.route("/usuarios").get(this.usuarioController.getAllUsuario);
        app.route("/usuario").get(this.usuarioController.get0neUsuario);
        app.route("/usuario").post(this.usuarioController.createUsuario);
        app.route("/usuario").patch(this.usuarioController.updateUsuario);
        app.route("/usuario").delete(this.usuarioController.deleteUsuario);
    }
}
exports.UsuarioRoutes = UsuarioRoutes;
