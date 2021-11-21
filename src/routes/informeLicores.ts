import { Router } from "express";
import {obtenerInformesAguardiente, obtenerInformesCerveza,obtenerInformesRon,obtenerInformesTequila,obtenerInformesVino,obtenerInformesVodka,obtenerInformesWhisky} from "../controller/informeLicoresController";
import errorHandler from "../middleware/erros";

const informeLicores = (app) =>{
    const router = Router();
    app.use('/',router);
    router.get('/obtenerInformesLicores',obtenerInformesAguardiente);
    router.get('/obtenerInformesCerveza',obtenerInformesCerveza);
    router.get('/obtenerInformesRon',obtenerInformesRon);
    router.get('/obtenerInformesTequila',obtenerInformesTequila);
    router.get('/obtenerInformesVino',obtenerInformesVino);
    router.get('/obtenerInformesVodka',obtenerInformesVodka);
    router.get('/obtenerInformesWhisky',obtenerInformesWhisky);



    router.use(errorHandler);
}
export default informeLicores;