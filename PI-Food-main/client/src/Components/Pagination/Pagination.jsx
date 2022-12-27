import React from "react";
import style from "./Pagination.module.css";

const Pagination =({recipesPerPage,allRecipes,paginated})=>{

    const numberPage = [];
    
    for(let i=0; i<Math.ceil(allRecipes / recipesPerPage); i++){
        numberPage.push(i +1);
    }

    return (
        <nav>
            <ul className={style.container}>
                {numberPage && numberPage.map(number =>(
                        <li key={number} onClick={()=>paginated(number)}>{number}</li>
                ))} 
            </ul>
        </nav>
    )
}

export default Pagination;