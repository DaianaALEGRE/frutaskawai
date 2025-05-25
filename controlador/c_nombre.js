const fs = require('fs');
const path=require('path');
const dotenv = require('dotenv');


dotenv.config();
const filepath= path.join(__dirname,'..','database',process.env.DATA_FILE);
const frutas = JSON.parse(fs.readFileSync(filepath,'utf-8'));

function producto (req,res){
res.json(frutas)
}


function productosNombre(req, res) {
const nombresB= req.params.nombre.toLowerCase();
const resultadoN=frutas.filter(p=> p.nombre.toLowerCase().includes(nombresB));
if (resultadoN.length ===0) {
    return res.status(404).json({ message:'no se encontro coincidencias'});

}

    res.json(resultadoN);
} ;

module.exports={producto,productosNombre};

