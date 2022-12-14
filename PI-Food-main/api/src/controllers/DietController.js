const {Diet}  = require('../db');

//?---------------------GET/DIETS-----------------------
const getDiets = async (req, res) => {
    try{
        const dietsDb = await Diet.findAll();
        res.json(dietsDb)
    }catch(err){
        res.status(400).json(err)
    }
}
 

module.exports ={
    getDiets
}