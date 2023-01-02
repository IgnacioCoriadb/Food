import axios from 'axios';
import {GET_RECIPES,GET_RECIPE_NAME,GET_RECIPE_ID,GET_DIETS,SORT_ALPHABETICAL,SORT_HEALTSCORE,LOADING,FILTER_BY_DIET} from "./actionsType.js";

export function getRecipes(){
    return async(dispatch)=>{
        try{
            dispatch({type: LOADING})
            const recipes = await axios.get(`http://localhost:3001/recipes`);
            dispatch({type:GET_RECIPES, payload: recipes.data});
        }catch(err){
            return err;
        }
    }
}

export function getRecipeName(payload){
    return async function(dispatch){
        try{
           const recipeName= await axios.get(`http://localhost:3001/recipes?name=${payload}`);
           return dispatch({type: GET_RECIPE_NAME, payload: recipeName.data});
        }catch(e){
            return e;
        }
    }
}

export function getRecipeId(id){
    return async function(dispatch){
        try{
            const recipeId= await axios.get(`http://localhost:3001/recipes/${id}`);
            dispatch({type:GET_RECIPE_ID, payload: recipeId.data});
        }catch(e){
            return e;
        }
    }
}

export function getDiets(){
    return async (dispatch)=>{
      try{
        const diets = await axios.get(`http://localhost:3001/diets`);
        dispatch({type: GET_DIETS, payload:diets.data})
      }catch(err){
        return err;
      }
    }
}

export function createRecipes(recipe){
    return async ()=>{
        try{
            const  createRecipe = await axios.post(`http://localhost:3001/recipes/`,recipe);
            return createRecipe;
        }catch(err){
            return err;
        }
    }
}

export function sortAlphabetic(payload){
    return {
        type: SORT_ALPHABETICAL,
        payload: payload
    }
}

export function sortHealtScore(payload){
    return{
        type: SORT_HEALTSCORE,
        payload: payload
    }
}

export function filterByDiet(payload){
    return {
        type: FILTER_BY_DIET,
        payload: payload
    }
}