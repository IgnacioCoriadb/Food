import React from 'react';
import style from "./Filters.module.css";
function Filter(){
    return (
        <React.Fragment>
            <div className={style.filters}>
                <div>
                    <input type="text" placeholder="Buscar Receta"/>
                    <button></button>
                </div>
                <div className={style.order}>
                    <button>Ordenar A-Z</button>
                    <button>Ordenar Z-A</button>
                    <button>Healt Score asc</button>
                    <button>Healt Score desc</button>

                </div>
            </div>
        </React.Fragment>
    )

}

export default Filter;