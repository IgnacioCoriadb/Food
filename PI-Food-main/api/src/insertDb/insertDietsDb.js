const {Diet} =require("../db"); 

const diets = [
    { "name":"Gluten Free"},
    {"name":"Ketogenic"},
    {"name":"Vegetarian"},
    {"name":"Lacto-Vegetarian"},
    {"name":"Ovo-Vegetarian"},
    {"name":"Vegan"},
    {"name":"Pescetarian"},
    {"name":"Paleo"},
    {"name":"Primal"},
    {"name": "Low FODMAP"},
    {"name": "Whole30"}
];
const inertDietsDb = async()=>{
    try{
        const allDiets =await Diet.findAll();
        if(allDiets.length === 0) {
            await Diet.bulkCreate(diets);
        }
    }catch(err){
        return err;
    }
}

module.exports ={
    inertDietsDb,
}