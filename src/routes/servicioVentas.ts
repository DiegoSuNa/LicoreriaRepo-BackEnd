import { Router } from "express";
import {obtenerProductosVenta, generarVenta} from "../controller/servicioVentasController";
import errorHandler from "../middleware/erros";


const servicioVentasProductos = (app) =>{
    const router = Router();
    app.use('/',router);
    router.get('/obtenerProductosVenta',obtenerProductosVenta);
    router.get('/generarVenta/:id',generarVenta);

    router.use(errorHandler);
}
export {servicioVentasProductos}
