import React, {useState,useEffect} from 'react';
import style from "./Filters.module.css";
import {useDispatch,useSelector} from "react-redux";
import {getDiets, getRecipeName} from "../../Redux/actions/actions";

function Filter({handleAlphabetical,handleScore,handleDiet}){

    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const handleChangue =  (e)=>{
        setInput(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(getRecipeName(input));
        setInput('');
    }
    useEffect(()=>{
        dispatch(getDiets());
    },[dispatch])

    const diets = useSelector(state=> state.diets);
   
    return (
        <React.Fragment>
            <div className={style.filters}>
                <div className={style.searchBar}>
                    <input type="text" placeholder="Buscar Receta" value={input} onChange={e=>handleChangue(e)}/>
                    <button type="submit" onClick={e=>handleSubmit(e)} className={style.search}>Search</button>
                </div>
                <div className={style.order}>
                    <button value="ASC" onClick={(e) => handleAlphabetical(e)}>Ordenar A-Z</button>
                    <button value="DESC" onClick={(e) => handleAlphabetical(e)}>Ordenar Z-A</button>
                    <button value="ASC" onClick={(e)=> handleScore(e)}>Healt Score asc</button>
                    <button value="DESC" onClick={(e)=> handleScore(e)}>Healt Score desc</button>
                    <select name="diets" onChange={(e)=> handleDiet(e)}  className={style.diets}>
                       {diets.map(d=> <option key={d.id} value={d.name} >{d.name}</option>)}
                    </select>
                </div>
            </div>
        </React.Fragment>
    )

}

export default Filter;