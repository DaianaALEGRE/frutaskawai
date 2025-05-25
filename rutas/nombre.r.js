const express= require ('express');
const { productosNombre } = require('../controlador/c_nombre.js');
const router= express.Router();

router.get('/productos/nombre/:nombre',productosNombre);



module.exports=router;