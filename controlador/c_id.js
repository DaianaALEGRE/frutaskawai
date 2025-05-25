const fs = require('fs');
const path=require('path');
const dotenv = require('dotenv');


dotenv.config();
const filepath= path.join(__dirname,'..','database',process.env.DATA_FILE);
const frutas = JSON.parse(fs.readFileSync(filepath,'utf-8'));

function producto (req,res){
res.json(frutas)
}


function id(req, res) {
const parametro= req.params.id;
 if (!/^\d+$/.test(parametro)) {
    return res.status(400).json({ error: 'El id ingresado debe ser un número' });
  }
objetoId = parseInt(parametro);
const resultadoI=frutas.find(p=> p.id===objetoId);
if (!resultadoI) {
    return res.status(404).json({ message:'no se encontro coincidencias'});

}

    res.json(resultadoI);
} ;

module.exports={producto,id};
