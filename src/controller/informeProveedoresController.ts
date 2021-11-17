import executeQuery from "../services/mysql.service"

const obtenerInformesProveedores = async(req,res,next) =>{
    await executeQuery('SELECT * FROM proveedor').then(response =>{
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null
        };
        res.json(data);
    }).catch(error => {
        next(error)
    })
}

const obtenerInformesProveedor = async(req, res, next) =>{
  const {id} = req.params;
    try{
        const response = await executeQuery(`SELECT * FROM proveedor WHERE idProveedor = ${id}`);
         const data = {
             message: `${response.length} datos encontrados`,
             data: response.length > 0 ? response[0] : null
         };
         res.json(data);
     }catch(error){
        next(error)
    }
}
const agregarInformesProveedor = async (req,res,next) =>{
    const {diaEntregaPedido, nombreTiendaFactura, dineroPedido, dineroAdicionalPedido} = req.body
    try{    
    const {diaEntregaPedido, nombreTiendaFactura, dineroPedido, dineroAdicionalPedido} = req.body
        const response = await executeQuery(`INSERT INTO proveedor (diaEntregaPedido, nombreTiendaFactura, dineroPedido, dineroAdicionalPedido) VALUES (${diaEntregaPedido},'${nombreTiendaFactura}',${dineroPedido},${dineroAdicionalPedido})`)
        res.status(201).json({ message: 'created', id: response.insertId});
    }catch(error){
        next(error)
    }
}
const actualizarInformesProveedor = (req,res,next) =>{
    const {diaEntregaPedido, nombreTiendaFactura, dineroPedido, dineroAdicionalPedido} = req.body
    const {id} = req.params;
    executeQuery(`UPDATE proveedor SET diaEntregaPedido = ${diaEntregaPedido}, nombreTiendaFactura = '${nombreTiendaFactura}', dineroPedido = ${dineroPedido}, dineroAdicionalPedido = ${dineroAdicionalPedido} WHERE idProveedor = '${id}'`).then((response) =>{

        res.json({message: response.affectedRows > 0 ? 'updated' : `No existe registro con id: ${req.params.id}`});
        res.status(201).json({ message: 'update', id: response.insertId});
    }).catch((error) => {
        next(error)
    });
}
const eliminarInformesProveedor = (req,res,next) =>{
    executeQuery(`DELETE FROM proveedor WHERE idProveedor = '${req.params.id}'`).then((response) => {
        res.json({message: response.affectedRows > 0 ? 'deleted' : `No existe registro con id: ${req.params.id}`});
        res.status(201).json({ message: 'delete', id: response.insertId});
    }).catch((error) => {
        next(error)
    });
}
export{obtenerInformesProveedores,obtenerInformesProveedor,agregarInformesProveedor,actualizarInformesProveedor,eliminarInformesProveedor}