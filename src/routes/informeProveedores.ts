import { Router } from "express";
import { obtenerInformesProveedores,obtenerInformesProveedor,agregarInformesProveedor,actualizarInformesProveedor,eliminarInformesProveedor} from "../controller/informeProveedoresController";

const InformesProveedorRoutes = (app) =>{
    const router = Router();
    app.use('/',router);
    router.get('/obtenerInformesProveedores',obtenerInformesProveedores);
    router.get('/obtenerInformesProveedor/:id',obtenerInformesProveedor);
    router.post('/agregarInformesProveedor',agregarInformesProveedor);
    router.put('/actualizarInformesProveedor/:id',actualizarInformesProveedor);
    router.delete('/eliminarInformesProveedor/:id',eliminarInformesProveedor);

}
export default InformesProveedorRoutes;