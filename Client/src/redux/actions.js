import axios from "axios";
//actions type
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

//actions creators
export function addFav(character) {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    const { data } = await axios.post(endpoint, character);
    console.log("add fav--->", data);
    return dispatch({
      type: "ADD_FAV",
      payload: data,
    });
  };
}
export function removeFav(id) {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    const { data } = await axios.delete(endpoint);
    return dispatch({
      type: "REMOVE_FAV",
      payload: data,
    });
  };
}
export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}
export function orderCards(orden) {
  return {
    type: ORDER,
    payload: orden,
  };
}
