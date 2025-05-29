


const express= require ('express');
const {verFrutas,agregarFruta, actualizarFruta, eliminar}=require('../controlador/c_frutas');
const router= express.Router();

router.get('/productos',verFrutas);
router.post('/productos',agregarFruta);
router.put('/productos/:id',actualizarFruta);
router.delete('/productos/:id',eliminar);
module.exports=router;