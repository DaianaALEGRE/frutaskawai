
const fs= require('fs'); 
const path=require('path');
const dotenv = require('dotenv');
dotenv.config();
const filepath = path.join(__dirname,'..', 'database', process.env.DATA_FILE);
const frutas =JSON.parse(fs.readFileSync(filepath,'utf-8'));

function verFrutas (req,res){
res.json(frutas)
}

module.exports={verFrutas};