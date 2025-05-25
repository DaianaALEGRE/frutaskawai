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

//const MONGO_URI = process.env.MONGO_URI;



const filepath = path.join(__dirname, 'database', process.env.DATA_FILE);
const frutas =JSON.parse(fs.readFileSync(filepath,'utf-8'));

// lo primero q hago para configurar mis rutas es declararlas
const productos= require('./rutas/productos.r');
const nombre= require('./rutas/nombre.r');
const id= require('./rutas/id');


//direcciones
app.use('/',id);
app.use('/',productos);
//app.use('/productos/:id',r_precio);
app.use('/',nombre);
app.listen(PORT,()=>{//express con app
        console.log(`puerto en el servidorservidor ejecutandose en el puerto ${PORT}`)
});
