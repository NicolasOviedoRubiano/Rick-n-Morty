import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Deatil() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [origin, setOrigin] = useState("");
  useEffect(() => {
    //código usado cuando se monta la página
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.data.name) {
          setCharacter(data.data);
          setOrigin(data.data.origin.name);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({}); //Cuando se desmonta la página;
  }, [id]);
  useEffect(() => setOrigin(""), [id]);
  return (
    <div className={styles.contenedor}>
      <div className={styles.divText}>
        <div className={styles.divName}>
          <h1>{character.name}</h1>
        </div>
        <div className={styles.divInfo}>
          <div className={styles.infoTitles}>
            <h2>💀 Status |</h2>
            <h2>👽Specie |</h2>
            <h2>♂/♀Gender |</h2>
            <h2>🌎Origin |</h2>
            <h2>#️⃣ episodes |</h2>
          </div>
          <div className={styles.infoContent}>
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            <h2>{character.origin?.name}</h2>
            <h2>{character.episode?.length}</h2>
          </div>
        </div>
      </div>
      <img
        src={character.image}
        alt={character.name}
        className={styles.characterImage}
      />
    </div>
  );
}

export default Deatil;
