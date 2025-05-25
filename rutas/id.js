


const express= require ('express');
const { id } = require('../controlador/c_id.js');
const router= express.Router();

router.get('/productos/id/:id',id);



module.exports=router;