import React from "react";
export default function SearchBar(props) {
   return (
      <div>
         <input id="busqueda" type='search' placeholder="Busca un personaje..."/>
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}