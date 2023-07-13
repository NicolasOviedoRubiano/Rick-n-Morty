import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Styles from "./Card.module.css";
import { addFav, removeFav } from "../../../redux/actions";
import { connect } from "react-redux";

function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const { id, addFav, removeFav, allCharacters } = props;
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  };

  useEffect(() => {
    allCharacters.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [allCharacters]);

  return (
    <div className={Styles.divCard}>
      <div className={Styles.frontCard}>
        <h2 className={Styles.name}>{props.name}</h2>
        <img
          className={Styles.characterImage}
          src={props.image}
          alt={props.name}
        />
      </div>
      <div className={Styles.backCard}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        <button
          className={Styles.closeButtom}
          onClick={() => {
            props.onClose(props.id);
          }}
          title="Eliminar personaje"
        >
          ❎
        </button>

        {/* <h2 className={Styles.informacion}>
               {props.status}</h2> */}
        <h2 className={Styles.informacion}>{props.species}</h2>
        <h2 className={Styles.informacion}>{props.gender}</h2>
        <NavLink to={`/detail/${props.id}`} className={Styles.detailLink}>
          <h2 className={Styles.detailButton}>➕ informacion</h2>
        </NavLink>
        {/* <h2 className={Styles.informacion}>
               {props.origin}</h2> */}
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};
const mapStateToProps = ({ allCharacters }) => {
  return { allCharacters };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
