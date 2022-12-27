import React from "react";
import style from "./Proyect.module.css";
import NavBar from "./../NavBar/NavBar.jsx";
const Project =()=>{

    return (
        <div>
        <NavBar/>
            <div className={style.container}>
                <h1>Proyecto Food Henry</h1>
                <div className={style.puntos}>
                    <h2>Objetivos del Proyecto</h2>
                    <ul>
                        <li>Aprender mejores prácticas</li>
                        <li>Aprender y practicar el workflow de GIT</li>
                        <li>Usar y practicar testing</li>
                    </ul>
                </div>
                <div className={style.puntos}>
                    <h2>Enunciado</h2>
                    <p>La idea general es crear una aplicación en la cual se puedan ver distintas recetas de comida junto con información relevante de las mismas utilizando la api externa spoonacular y a partir de ella poder, entre otras cosas:</p>
                    <ul>
                        <li>Buscar recetas</li>
                        <li>Filtrarlos / Ordenarlos</li>
                        <li>Crear nuevas recetas propias</li>
                    </ul>
                </div>
                <div className={style.puntos}>
                    <h2>Tecnologías utilizadas</h2>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Express</li>
                        <li>Sequalize-Postgres</li>
                    </ul>
                </div>
            </div>
        </div>  
            


    )

}


export default Project