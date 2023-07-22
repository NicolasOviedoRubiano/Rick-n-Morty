import Card from "./Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div className={styles.divContenedor}>
      {props.characters.map((character) => {
        return (
          <Card
            id={character.id}
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={props.onClose}
          />
        );
      })}
    </div>
  );
}
