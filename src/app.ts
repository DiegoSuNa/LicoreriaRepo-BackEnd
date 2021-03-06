import express  from "express";
import inventarioRoutes from "./routes/inventario";
import informeLicores from "./routes/informeLicores";
import InformesProveedorRoutes from "./routes/informeProveedores";
import { servicioVentasProductos } from "./routes/servicioVentas";

import config from "./config/config";
import errorHandler from "./middleware/erros";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

inventarioRoutes(app);
InformesProveedorRoutes(app);
informeLicores(app);
servicioVentasProductos(app);

app.use(errorHandler);
app.get('/prueba/:id',async (req, res, next)=> {

    res.status(200).json({message: "Todo nice"})
});
app.listen(config.PORT,()=> {
    return console.log(`servidor corriendo en el puerto ${config.PORT}`);
});
