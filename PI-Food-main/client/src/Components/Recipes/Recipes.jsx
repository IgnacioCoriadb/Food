import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import Recipe from "./Recipe.jsx";
import style from "./Recipes.module.css";
import Pagination from "../Pagination/Pagination";

import Filter from "../Filters/Filter";
import {sortAlphabetic,sortHealtScore,filterByDiet} from "../../Redux/actions/actions";

const Recipes = ()=>{
    const allRecipes =  useSelector(state=> state.recipes)
    const dispatch = useDispatch();    
    const loading = useSelector(state=> state.loading);
    
    const [order, setOrder] = useState('')

    //?paginado
    const [currentPage, setCurrentPage]= useState(1);
    const [recipesPerPage, setRecipesPerPage] = useState(9);
    const lastRecipe = currentPage * recipesPerPage;
    const firstRecipe = lastRecipe - recipesPerPage;
    const recipesPaginated = allRecipes.slice(firstRecipe, lastRecipe);

    const paginated = (numberPage)=>{
        setCurrentPage(numberPage);
    }

    const handleAlphabetical = (e)=>{
        e.preventDefault();
        dispatch(sortAlphabetic(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value)
    }

    const handleScore = (e)=>{
        dispatch(sortHealtScore(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value)
    }

    const handleDiet =(e)=>{
        dispatch(filterByDiet(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value)
    }
        return (
            <div>
                <Filter handleAlphabetical={handleAlphabetical} handleScore={handleScore} handleDiet={handleDiet}></Filter>
                <div className={style.container}>
                    {loading ? recipesPaginated.map(r=>  {          
                        return (<div key={r.id}> <Recipe key={r.id} id={r.id} image={r.image} diets={r.diets} name={r.name}></Recipe></div>)
                      }):
                      <div>
                        <h1>LOADING........</h1>
                      </div>
                    }

                </div>
       
               
                
                <Pagination  recipesPerPage={recipesPerPage} allRecipes={allRecipes.length} paginated={paginated} />

            </div>
        )
  

}

export default Recipes;