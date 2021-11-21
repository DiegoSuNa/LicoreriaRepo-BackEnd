import executeQuery from "../services/mysql.service"

const ActualizarDiaVenta = (req,res,next) =>{
    const {diaVentaProducto} = req.body;
    const {id} = req.params;
    executeQuery(`UPDATE ventaProducto SET diaVentaProducto = ${diaVentaProducto} WHERE idventaProducto = '${id}'`).then((response) =>{

        res.json({message: response.affectedRows > 0 ? 'updated' : `No existe registro con id: ${req.params.id}`});
    }).catch((error) => {
        next(error)
    });
}

export {ActualizarDiaVenta};