import { Request, Response, Application } from "express";

import { VentaController } from "../controllers/venta.controller";

export class VentaRoutes {
    public ventaController: VentaController = new VentaController();
    
    public routes(app: Application): void{
        app.route("/venta").get(this.ventaController.getAllVenta)
    }
}