import executeQuery from "../services/mysql.service"

const obtenerProductosVenta = async(req,res,next) =>{
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

const generarVenta = async(req, res, next)=>{
    
    await executeQuery(`INSERT INTO ventaProducto (nombreVentaProducto, tipoProducto, cantidadVentaProducto,unidadMedidaProducto, ventaPrecioProducto, diaVentaProducto) SELECT nombreProducto, tipoProducto, cantidadProducto, unidadMedidaProducto, precio, fechaVencimiento FROM inventario WHERE
    NOT EXISTS (SELECT 1 FROM ventaProducto WHERE (inventario.nombreProducto = ventaProducto.nombreVentaProducto))`).then(response =>{
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null
    };
    res.json(data);
    }).catch(error => {
    next(error)
    })
}



export {obtenerProductosVenta, generarVenta};