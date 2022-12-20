import React,{useState} from 'react';
import style from "./Home.module.css";
import NavBar from "../NavBar/NavBar.jsx";
import Filter from "../Filters/Filter.jsx";
import Recipes from "../Recipes/Recipes.jsx";

import { useDispatch } from 'react-redux';
import {getRecipes} from '../../Redux/actions/actions';

function Home(){
 
    const dispatch = useDispatch();
    dispatch(getRecipes());

    return (
        <React.Fragment>
            <div className={style.container}>
                <NavBar></NavBar>
                <Filter></Filter>
                <Recipes></Recipes>
            </div>
        </React.Fragment>
    )
}

export default Home;