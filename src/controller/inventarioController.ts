import executeQuery from "../services/mysql.service"

const obtenerProductos = async(req,res) =>{
    await executeQuery('SELECT * FROM inventario').then(response =>{
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null
        };
        res.json(data);
    }).catch(error => {
        console.log(error)
        res.status(500).send(error);
    })
}

const obtenerProducto = async(req, res) =>{
  const {id} = req.params;
    try{
        const response = await executeQuery(`SELECT * FROM inventario WHERE idInventario = ${id}`);
         const data = {
             message: `${response.length} datos encontrados`,
             data: response.length > 0 ? response[0] : null
         };
         res.json(data);
     }catch(error){
         console.log(error);
         res.status(500).send(error);
    }
}
const agregarProductos = async (req,res) =>{
    const {nombreProducto, tipoProducto, cantidadProducto, unidadMedidaProducto, precio, fechaVencimiento} = req.body
    try{    
    const {nombreProducto, tipoProducto, cantidadProducto, unidadMedidaProducto, precio, fechaVencimiento} = req.body
        const response = await executeQuery(`INSERT INTO inventario (nombreProducto, tipoProducto, cantidadProducto, unidadMedidaProducto, precio, fechaVencimiento) VALUES ('${nombreProducto}','${tipoProducto}',${cantidadProducto},'${unidadMedidaProducto}',${precio},${fechaVencimiento})`)
        res.status(201).json({ message: 'created', id: response.insertId});
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}
const actualizarProductos = (req,res) =>{
    const {nombreProducto, tipoProducto, cantidadProducto, unidadMedidaProducto, precio, fechaVencimiento} = req.body;
    const {id} = req.params;
    executeQuery(`UPDATE inventario SET nombreProducto = '${nombreProducto}', tipoProducto = '${tipoProducto}', cantidadProducto = ${cantidadProducto}, unidadMedidaProducto = '${unidadMedidaProducto}', precio = ${precio}, fechaVencimiento = ${fechaVencimiento} WHERE idInventario = '${id}'`).then((response) =>{

        res.json({message: response.affectedRows > 0 ? 'updated' : `No existe registro con id: ${req.params.id}`});
    }).catch((error) => {
        console.log(error);
        res.status(500).send(error);
    });
}
const eliminarProductos = (req,res) =>{
    executeQuery(`DELETE FROM inventario WHERE idInventario = '${req.params.id}'`).then((response) => {
        res.json({message: response.affectedRows > 0 ? 'deleted' : `No existe registro con id: ${req.params.id}`});
    }).catch((error) => {
        console.log(error);
        res.status(500).send(error);
    });
}
export{obtenerProductos,obtenerProducto,agregarProductos,actualizarProductos,eliminarProductos}