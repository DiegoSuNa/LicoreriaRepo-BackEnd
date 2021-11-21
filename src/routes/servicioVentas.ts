import { Router } from "express";
import {ActualizarDiaVenta} from "../controller/servicioVentasController";
import errorHandler from "../middleware/erros";


const servicioVentasProductos = (app) =>{
    const router = Router();
    app.use('/',router)
    router.put('/ActualizarDiaVenta/:id',ActualizarDiaVenta);

    router.use(errorHandler);
}
export {servicioVentasProductos}
