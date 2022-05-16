"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const user_1 = require("./user");
class Routes {
    constructor() {
        this.usarioRoutes = new user_1.UsuarioRoutes();
    }
}
exports.Routes = Routes;
