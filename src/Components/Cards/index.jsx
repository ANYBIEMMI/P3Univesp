import styles from './card.module.css'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function Card({img , titulo, descrição}){


    return(
        
        <section className={styles.card} >
           
          
            <div>
          
            <img src={img} alt=""/>
            </div>
            <h3>{titulo}</h3>
            <p>{descrição}</p>
        </section>
    )
}

export default Card