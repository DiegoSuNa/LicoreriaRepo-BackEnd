import express  from "express";
import inventarioRoutes from "./routes/inventario";
import config from "./config/config";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

inventarioRoutes(app);
app.get('/prueba/:id',async (req, res, next)=> {

    res.status(200).json({message: "Todo nice"})
});
app.listen(config.PORT,()=> {
    return console.log(`servidor corriendo en el puerto ${config.PORT}`);
});
