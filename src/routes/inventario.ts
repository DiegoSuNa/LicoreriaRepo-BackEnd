import { Router } from "express";
import { actualizarProductos, agregarProductos, eliminarProductos, obtenerProducto, obtenerProductos } from "../controller/inventarioController";
import isAdmin from "../middleware/admin";
import errorHandler from "../middleware/erros";

const inventarioRoutes = (app) =>{
    const router = Router();
    app.use('/',router);
    router.get('/obtenerProductos',isAdmin,obtenerProductos);
    router.get('/obtenerProducto/:id',obtenerProducto);
    router.post('/agregarProductos',agregarProductos);
    router.put('/actualizarProductos/:id',actualizarProductos);
    router.delete('/eliminarProductos/:id',eliminarProductos);

    router.use(errorHandler);
}
export default inventarioRoutes; 