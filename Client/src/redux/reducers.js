import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};
export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };
    case REMOVE_FAV:
      return { ...state, allCharacters: payload, myFavorites: payload };
    case FILTER:
      const filteredCaracther = state.allCharacters.filter(
        (character) => character.gender === payload
      );
      console.log({ ...state, myFavorites: filteredCaracther });
      return { ...state, myFavorites: filteredCaracther };
    case ORDER:
      const orderedCharacters = [...state.allCharacters].sort((a, b) => {
        if (payload === "A") {
          return a.id - b.id;
        }
        if (payload === "D") {
          return b.id - a.id;
        }
      });
      console.log(orderedCharacters);
      return { ...state, myFavorites: orderedCharacters };
    default:
      return { ...state };
  }
}
