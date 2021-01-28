import axios from "axios";

export const FetchPokemonList = () => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING",
    });

    const res = await axios.get("https://pokeapi.co/api/v2/generation/1/");

    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
    });
  }
};

export const FetchPokemonDetails = (name) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_DETAILS_LOADING",
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

    dispatch({
      type: "POKEMON_DETAILS_SUCCESS",
      payload: res.data,
      name: name,
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_DETAILS_FAIL",
    });
  }
};
