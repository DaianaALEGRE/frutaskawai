


const express= require ('express');
const {verFrutas,agregarFruta}=require('../controlador/c_frutas');
const router= express.Router();

router.get('/productos',verFrutas);
router.post('/productos',agregarFruta);


module.exports=router;