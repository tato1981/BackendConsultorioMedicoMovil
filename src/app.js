import express from "express";
import cors from "cors";
import morgan from "morgan";

//documentacion de la api
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { options } from "./swaggerOption";

const spacs = swaggerJSDoc(options)


import adminRoutes from './routes/adminRouter';


const app = express();

//permite cualquier aplicacion de backend pueda conectarse y evitar errores
app.use(cors());

//permite ver por consola las peticiones que llegan del servidos
app.use(morgan('dev'));

//permite leer los datos json
app.use(express.json());

app.use(adminRoutes);

//documentacion de la API
app.use('/docs', swaggerUi.serve, swaggerUi.setup(spacs));


export default app;