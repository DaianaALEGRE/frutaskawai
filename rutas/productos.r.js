const express= require('express');
const { verFrutas } = require('../controlador/c_productos.js');
const router= express.Router();
router.get('/',verFrutas)




module.exports=router;