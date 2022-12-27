import {GET_RECIPES,GET_RECIPE_NAME,GET_RECIPE_ID,GET_DIETS,SORT_ALPHABETICAL, SORT_HEALTSCORE,ERROR} from "../actions/actionsType";

const initialState ={
    recipes: [],
    allRecipes:[],
    recipeDetail: [],
    diets: [],
}

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_RECIPES: 
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            }
        case GET_RECIPE_NAME:
            return {
                ...state,
                recipes: action.payload
            }
        case GET_RECIPE_ID:
            return {
                ...state,
                recipeDetail: action.payload
            }
        case GET_DIETS:
            return {
                ...state,
                diets: action.payload
            }
        case SORT_ALPHABETICAL:
            let sortedRecipes= [...state.recipes];
            sortedRecipes = action.payload === "ASC" ?
            state.recipes.sort(function(a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                return 0;
              }) :
              state.recipes.sort(function(a, b) {
                if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                return 0;
              });       
            return {
                ...state,
                recipes: sortedRecipes
            }
            case SORT_HEALTSCORE: 
                let sortedHealtScore = [...state.recipes];
                sortedHealtScore = action.payload === "ASC" ?
                state.recipes.sort(function(a,b){
                    if(a.healthScore > b.healthScore) return 1;
                    if(a.healthScore < b.healthScore) return -1;
                    return 0;
                }):
                state.recipes.sort(function(a,b){
                    if(a.healthScore < b.healthScore) return 1;
                    if(a.healthScore > b.healthScore) return -1;
                    return 0;
                });
            return {
                ...state,
                recipes: sortedHealtScore
            }
            // case ERROR:
            //     return {
            //         ...state,
            //         error: action.payload
            //     }
        default:
            return state;
    }
}

export default rootReducer;