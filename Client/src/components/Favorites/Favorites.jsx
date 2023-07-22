import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../Cards/Card/Card";
import styles from "./Favorites.module.css";
import { filterCards, orderCards } from "../../redux/actions";

function Favorites({ myFavorites, onClose }) {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    console.log(myFavorites);
  };
  const handleFilter = (event) => {
    console.log(event.target.value);
    dispatch(filterCards(event.target.value));
    setAux(!aux);
  };
  // console.log(myFavorites);
  return (
    <div className={styles.divContenedor}>
      <div className={styles.divSelectors}>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className={styles.divContenedor}>
        {myFavorites.map((character) => {
          return (
            <Card
              id={character.id}
              key={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin}
              image={character.image}
              onClose={onClose}
            />
          );
        })}
      </div>
    </div>
  );
}
const mapStateToProps = ({ myFavorites }) => {
  return { myFavorites };
};

export default connect(mapStateToProps, null)(Favorites);
