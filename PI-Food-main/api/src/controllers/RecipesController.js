const axios = require('axios');
const {Recipe,Diet}  = require('../db');
const {API_KEY} = process.env;
const { Op } = require("sequelize");


//?--------------------GET/RECIPES ALL API -------------------------------------------
const getAllRecipesApi = async() =>{
    try{
        const recipesApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
        const dataApi = recipesApi.data.results.map((r)=>{
            return {
                id: r.id,
                image: r.image,
                name: r.title,
                diets: r.diets,
                healthScore: r.healthScore
            }
        });
        return dataApi;
    }catch(err){
        return err;
    }
}
//?----------------------GET/RECIPES ALL DB------------------------------------------
const getAllRecipesDB = async() =>{
    try{
        const recipesDb = await Recipe.findAll({include: Diet});
        return recipesDb;
    }catch(err){
        return err;
    }
}
//?------------------------CONCAT ALLAPI-ALLDB--------------------------------------
const allRecipes_DB_API = async()=>{
    const api = await getAllRecipesApi();
    const db = await getAllRecipesDB();

    return api.concat(db);
}
//?--------------------GET/RECIPES?NAME="..." API------------------------------------ 
const getRecipesQuerryApi = async(name)=>{
    try{
        const recipesApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&addRecipeInformation=true&number=100&apiKey=${API_KEY}`)
       
        const dataApi = recipesApi.data.results.map((r)=>{
            return {
                id: r.id,
                image: r.image,
                name: r.title,
                diets: r.diets
            }
        });
        return dataApi;
    }catch(e){
         return e;
    }
}
//?-----------------------GET/RECIPES?NAME="..." DB----------------------------------
const getRecipesQuerryDB = async(name)=>{
    try{
        const recipesQueryDb = await Recipe.findAll({
            where:{
                name :{
                    [Op.like]: `%${name}%`
                }
            }
        });
        return recipesQueryDb;
    }catch(e){
         return e;
    }

}
//?------------------------CONCAT QUERYAPI-QUERYDB-----------------------------------
const queryRecipes_API_DB =async(name)=>{
    try{
        const api = await getRecipesQuerryApi(name);
        const db = await getRecipesQuerryDB(name);
    
        if(api.length >0 && db.length >0) return api.concat(db);
        else if (api.length > 0) return api;
        else if(db.length > 0) return db;
        else if(db.length === 0 && api.length === 0) return getAllRecipesApi();

    }catch(err){
        return  err;
    }
    
    
}

//?--------------------GET/RECIPES/{idReceta} API------------------------------------
const getRecipesIdApi =async(idRecipes)=>{
    try{
        const recipesApi = await axios.get(`https://api.spoonacular.com/recipes/${idRecipes}/information?apiKey=${API_KEY}&addRecipeInformation=true`);

        const r =recipesApi.data;
        const dataApi = [{
            id: r.id,
            image: r.image,
            name: r.title,
            diets: r.diets,
            summary: r.summary,
            healthScore: r.healthScore,
            dishTypes: r.dishTypes,
            steps: r.analyzedInstructions[0]?.steps.map(e => {
                return {
                    number: e.number,
                    step: e.step
                }
            })
            
        }]

        return dataApi.length > 0 ? dataApi : [];
    }catch(err){
        return err;
    }
}
//?--------------------GET/RECIPES/{idReceta} BD-------------------------------------
const getRecipesIdBD = async(idRecipes)=>{
    try{
        const recipesDb = [await Recipe.findByPk(idRecipes,{include: Diet})];

     return recipesDb.length > 0 ? recipesDb : []
    }catch(err){
        return err;
    }
}
//?--------------------CONCAT IDAPI-IDBD---------------------------------------------
const idRecipes_API_DB = async(idRecipes)=>{
    try{
        const api = await getRecipesIdApi(idRecipes);
        const db = await getRecipesIdBD(idRecipes);
            
        if(db.length > 0) return db;
        else if(api.length > 0) return api;
        else return `Receta no encontrada`;

    }catch(err){
        return err;
    }
   
}
//?------------------------POST/RECIPES----------------------------------------------
const postRecipe =async (req,res)=>{
    try{
        const {name,summary,healthScore,steps,dietId} = req.body;
        const newRecipe =await Recipe.create({
            name,
            summary,
            healthScore,
            steps,
        })
        dietId.forEach(async(diet) =>{
            const result = await Diet.findAll({
                where: {
                    id: diet
                }
            });
            await newRecipe.addDiet(result);
        })
        return res.json("Receta agregada con éxito")

    }catch(err){
        return res.status(400).json({err: err.message});
    }

}




module.exports = {
    allRecipes_DB_API,
    queryRecipes_API_DB,
    idRecipes_API_DB,
    postRecipe
    
}