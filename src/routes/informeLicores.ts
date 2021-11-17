import { Router } from "express";
import {obtenerInformesLicores, obtenerInformesCerveza} from "../controller/informeLicoresController";
import errorHandler from "../middleware/erros";

const informeLicores = (app) =>{
    const router = Router();
    app.use('/',router);
    router.get('/obtenerInformesLicores',obtenerInformesLicores);
    router.get('/obtenerInformesCerveza',obtenerInformesCerveza)


    router.use(errorHandler);
}
export default informeLicores;