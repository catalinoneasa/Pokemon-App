import axios from "axios";

export const fetchPokemonList = () => async (dispatch) => {
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

export const fetchPokemonDetails = (name) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_DETAILS_LOADING",
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

    dispatch({
      type: "POKEMON_DETAILS_SUCCESS",
      payload: {
        sprites: res.data.sprites,
        stats: res.data.stats,
        types: res.data.types,
        name: name,
      },
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_DETAILS_FAIL",
    });
  }
};
