const fs = require('fs');
const path=require('path');
const dotenv = require('dotenv');
dotenv.config();
const filepath= path.join(__dirname,'..','database',process.env.DATA_FILE);
function leerFrutas() {
  return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
}
//funcion para guardar 
function guardarFrutas(data) {
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
}

function verFrutas(req, res) {
  const frutas = leerFrutas();
  res.json(frutas);
}
function agregarFruta(req, res) {
  const frutas = leerFrutas();
  const nuevaFruta = req.body;
   if (!nuevaFruta.nombre) {
    return res.status(400).json({ error: 'colocar nombre' });
  } frutas.push(nuevaFruta);
    guardarFrutas(frutas);
      res.status(201).json(nuevaFruta);
}
function actualizarFruta(req, res){
  const frutas= leerFrutas();
const id = parseInt(req.params.id);
const index= frutas.findIndex(fruta =>fruta.id === id);

if(index=== -1){ 
  return res.status(404).json({error: 'fruta no encontrada'});
}
frutas[index] = {...frutas[index], ...req.body};
guardarFrutas(frutas);
res.status(200).json({
  mensaje: ' Actualizada correctamente' ,
  fruta: frutas[index]});
 }
 
 function eliminar(req,res){
 const frutas= leerFrutas();
const id = parseInt(req.params.id);
const index= frutas.findIndex(fruta =>fruta.id === id);

if(index=== -1){ 
  return res.status(404).json({error: 'fruta no encontrada'});
}
const frutaEliminada = frutas.splice(index,1)[0];
  guardarFrutas(frutas);
res.status(200).json({
  mensaje: 'Borrada correctamente' ,
  fruta: frutaEliminada});
 

 }
module.exports = {
  verFrutas ,agregarFruta, actualizarFruta,eliminar}