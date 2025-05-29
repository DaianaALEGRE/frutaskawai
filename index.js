//webserver (con nodemon npm star)_express
//rutas app.get
// manejo de ruta inexistente app.use
const express= require('express');//declaro express
const app =express()//uso express cpn app
const fs=require('fs')
const PORT =8080;
//mongo
const mongoose = require('mongoose');
//servir un sitio web con path
const path=require('path');
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser'); 

//const MONGO_URI = process.env.MONGO_URI;
// Middleware
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

const filepath = path.join(__dirname, 'database', process.env.DATA_FILE);
const frutas =JSON.parse(fs.readFileSync(filepath,'utf-8'));

// lo primero q hago para configurar mis rutas es declararlas
const productos= require('./rutas/productos.r');
const nombre= require('./rutas/nombre.r');
const id= require('./rutas/id');
const crud= require('./rutas/frutas.r');

//direcciones
app.use('/',id);
app.use('/',productos);
//app.use('/productos/:id',r_precio);
app.use('/',nombre);
app.use('/',crud);
app.listen(PORT,()=>{//express con app
        console.log(`puerto en el servidorservidor ejecutandose en el puerto ${PORT}`)
});


// aclaracion ,cambie el nombre de los endpoints para controlar mejor las peticiones y evitar errores:
//GET /productos → Todos los productos
//GET /productos/id/:id → Producto por ID
//GET /productos/nombre/:nombre → Producto por nombre