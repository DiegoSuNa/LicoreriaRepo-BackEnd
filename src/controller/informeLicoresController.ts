import executeQuery from "../services/mysql.service"

const obtenerInformesAguardiente = async(req,res,next) =>{
    await executeQuery(`SELECT * FROM inventario WHERE tipoProducto='AGUARDIENTE'`).then(response =>{
         const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null
        };
         res.json(data);
    }).catch(error => {
         next(error)
    });
}

const obtenerInformesCerveza = async(req,res,next) =>{
     await executeQuery(`SELECT * FROM inventario WHERE tipoProducto='CERVEZA'`).then(response =>{
          const data = {
             message: `${response.length} datos encontrados`,
             data: response.length > 0 ? response : null
         };
          res.json(data);
     }).catch(error => {
          next(error)
     });
 }

const obtenerInformesWhisky = async(req,res,next) =>{
     await executeQuery(`SELECT * FROM inventario WHERE tipoProducto='WHISKY'`).then(response =>{
          const data = {
             message: `${response.length} datos encontrados`,
             data: response.length > 0 ? response : null
         };
          res.json(data);
     }).catch(error => {
          next(error)
     });
}
const obtenerInformesTequila = async(req,res,next) =>{
     await executeQuery(`SELECT * FROM inventario WHERE tipoProducto='TEQUILA'`).then(response =>{
          const data = {
             message: `${response.length} datos encontrados`,
             data: response.length > 0 ? response : null
         };
          res.json(data);
     }).catch(error => {
          next(error)
     });
}
const obtenerInformesVodka = async(req,res,next) =>{
     await executeQuery(`SELECT * FROM inventario WHERE tipoProducto='VODKA'`).then(response =>{
          const data = {
             message: `${response.length} datos encontrados`,
             data: response.length > 0 ? response : null
         };
          res.json(data);
     }).catch(error => {
          next(error)
     });
}
const obtenerInformesRon = async(req,res,next) =>{
     await executeQuery(`SELECT * FROM inventario WHERE tipoProducto='RON'`).then(response =>{
          const data = {
             message: `${response.length} datos encontrados`,
             data: response.length > 0 ? response : null
         };
          res.json(data);
     }).catch(error => {
          next(error)
     });
}
const obtenerInformesVino= async(req,res,next) =>{
     await executeQuery(`SELECT * FROM inventario WHERE tipoProducto='VINO'`).then(response =>{
          const data = {
             message: `${response.length} datos encontrados`,
             data: response.length > 0 ? response : null
         };
          res.json(data);
     }).catch(error => {
          next(error)
     });
}

export {obtenerInformesAguardiente,obtenerInformesCerveza,obtenerInformesWhisky,obtenerInformesVino,obtenerInformesTequila,obtenerInformesVodka,obtenerInformesRon};
