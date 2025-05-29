const express= require('express');
const { verFrutas } = require('../controlador/c_productos.js');
const router= express.Router();
router.get('/productos',verFrutas)




module.exports=router;