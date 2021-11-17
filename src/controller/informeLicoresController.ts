import executeQuery from "../services/mysql.service"

const obtenerInformesLicores = async(req,res,next) =>{
    await executeQuery(`SELECT * FROM inventario WHERE tipoProducto='LICORES'`).then(response =>{
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
export {obtenerInformesLicores,obtenerInformesCerveza};
