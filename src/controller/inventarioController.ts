import executeQuery from "../services/mysql.service"

const obtenerProductos = async(req,res,next) =>{
    await executeQuery('SELECT * FROM inventario').then(response =>{
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null
        };
        res.json(data);
    }).catch(error => {
        next(error)
    })
}

const obtenerProducto = async(req, res, next) =>{
  const {id} = req.params;
    try{
        const response = await executeQuery(`SELECT * FROM inventario WHERE idInventario = ${id}`);
         const data = {
             message: `${response.length} datos encontrados`,
             data: response.length > 0 ? response[0] : null
         };
         res.json(data);
     }catch(error){
        next(error)
    }
}
const agregarProductos = async (req,res,next) =>{
    const {nombreProducto, tipoProducto, cantidadProducto, unidadMedidaProducto, precio, fechaVencimiento,diaVentaProducto} = req.body;
    try{    
    const {nombreProducto, tipoProducto, cantidadProducto, unidadMedidaProducto, precio, fechaVencimiento,nombreVentaProducto, cantidadVentaProducto, ventaPrecioProducto, diaVentaProducto} = req.body
        const response = await executeQuery(`INSERT INTO inventario (nombreProducto, tipoProducto, cantidadProducto, unidadMedidaProducto, precio, fechaVencimiento) VALUES ('${nombreProducto}','${tipoProducto}',${cantidadProducto},'${unidadMedidaProducto}',${precio},${fechaVencimiento})`);
        executeQuery(`INSERT INTO ventaProducto (nombreProducto, tipoProducto, cantidadProducto, unidadMedidaProducto, precio) VALUES ('${nombreProducto}','${tipoProducto}',${cantidadProducto},'${unidadMedidaProducto}',${precio})`);

        res.status(201).json({ message: 'created', id: response.insertId});
    }catch(error){
        next(error)
    }
}
const actualizarProductos = (req,res,next) =>{
    const {nombreProducto, tipoProducto, cantidadProducto, unidadMedidaProducto, precio, fechaVencimiento} = req.body;
    const {id} = req.params;
    executeQuery(`UPDATE inventario SET nombreProducto = '${nombreProducto}', tipoProducto = '${tipoProducto}', cantidadProducto = ${cantidadProducto}, unidadMedidaProducto = '${unidadMedidaProducto}', precio = ${precio}, fechaVencimiento = ${fechaVencimiento} WHERE idInventario = '${id}'`).then((response) =>{

        res.json({message: response.affectedRows > 0 ? 'updated' : `No existe registro con id: ${req.params.id}`});
    }).catch((error) => {
        next(error)
    });
}
const eliminarProductos = (req,res,next) =>{
    executeQuery(`DELETE FROM inventario WHERE idInventario = '${req.params.id}'`).then((response) => {
        res.json({message: response.affectedRows > 0 ? 'deleted' : `No existe registro con id: ${req.params.id}`});
    }).catch((error) => {
        next(error)
    });
}


export{obtenerProductos,obtenerProducto,agregarProductos,actualizarProductos,eliminarProductos}