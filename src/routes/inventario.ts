import { Router } from "express";
import { actualizarProductos, agregarProductos, eliminarProductos, obtenerProducto, obtenerProductos } from "../controller/inventarioController";

const inventarioRoutes = (app) =>{
    const router = Router();
    app.use('/',router);
    router.get('/obtenerProductos',obtenerProductos);
    router.get('/obtenerProducto/:id',obtenerProducto);
    router.post('/agregarProductos',agregarProductos);
    router.put('/actualizarProductos/:id',actualizarProductos);
    router.delete('/eliminarProductos/:id',eliminarProductos);
}
export default inventarioRoutes;