import React,{useEffect} from 'react';
import style from "./Home.module.css";
import NavBar from "../NavBar/NavBar.jsx";
import Recipes from "../Recipes/Recipes.jsx";

import { useDispatch } from 'react-redux';
import {getRecipes} from '../../Redux/actions/actions';

function Home(){
 
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getRecipes());
    },[dispatch]);

    
    return (
        <React.Fragment>
            <div className={style.container}>
                <NavBar></NavBar>
                <Recipes></Recipes>
            </div>
        </React.Fragment>
    )
}

export default Home;