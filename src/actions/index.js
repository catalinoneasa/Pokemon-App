import axios from "axios";

export const FetchPokemonList = () => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING",
    });

    const res = await axios.get(
      "https://pokeapi.co/api/v2/generation/1/?limit=20",
    );

    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data,
    });
    console.log("Api  result====> " + JSON.stringify(res.data));
  } catch (e) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
    });
  }
};
