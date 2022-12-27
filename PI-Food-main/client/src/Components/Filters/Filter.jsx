import React, {useState} from 'react';
import style from "./Filters.module.css";
import {useDispatch} from "react-redux";
import {getRecipeName} from "../../Redux/actions/actions";

function Filter({handleAlphabetical,handleScore}){

    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const handleChangue =  (e)=>{
        setInput(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        try{
            dispatch(getRecipeName(input));
        }catch(err){
            return err;
        }

        setInput('')
    }

    return (
        <React.Fragment>
            <div className={style.filters}>
                <div>
                    <input type="text" placeholder="Buscar Receta" value={input} onChange={e=>handleChangue(e)}/>
                    <button type="submit" onClick={e=>handleSubmit(e)}>Search</button>
                </div>
                <div className={style.order}>
                    <button value="ASC" onClick={(e) => handleAlphabetical(e)}>Ordenar A-Z</button>
                    <button value="DESC" onClick={(e) => handleAlphabetical(e)}>Ordenar Z-A</button>
                    <button value="ASC" onClick={(e)=> handleScore(e)}>Healt Score asc</button>
                    <button value="DESC" onClick={(e)=> handleScore(e)}>Healt Score desc</button>
                </div>
            </div>
        </React.Fragment>
    )

}

export default Filter;