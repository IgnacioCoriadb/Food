import React from "react";
import style from "./landingPage.module.css";
import {Link} from "react-router-dom";

function LandingPage (){
    return (
        <React.Fragment>
            <div className={style.container}>
                <div className={style.contenido}>
                    <div className={style.text_button}>
                        <h2><span>FOODS</span> HENRY</h2>
                        <Link to="/home">
                            <button className={style.btnIngresar}>Ingresar</button>                          
                        </Link>           
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}



export default LandingPage;