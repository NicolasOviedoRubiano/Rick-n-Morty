import React, { useState } from "react";
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const [ID, setId] = useState('')
   const handleChange = (event) => {
      let id = event.target.value
      if(event.target.value!==ID){
         setId(id)
      }
      
   }
   return (
      <div className={styles.searchBar}>
         <input 
         id="busqueda" 
         type='search' 
         placeholder="Escriba el ID del personaje..." 
         className={styles.busquedaInput} 
         onChange={handleChange} 
         value={ID}
         />

         <button 
         onClick={()=> {props.onSearch(ID)}} 
         title="Agregar personaje"
         className={styles.busquedaButton}>
         </button>
      </div>
   );
}