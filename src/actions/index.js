import axios from "axios";

export const fetchPokemonList = () => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING",
    });

    const res = await axios.get("https://pokeapi.co/api/v2/generation/1/");
    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data.pokemon_species,
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
    const {
      sprites: { front_default, front_female, back_default, back_female },
      stats,
      types,
    } = res.data;

    dispatch({
      type: "POKEMON_DETAILS_SUCCESS",
      payload: {
        sprites: {
          front_default,
          front_female,
          back_default,
          back_female,
        },
        stats,
        types,
        name,
      },
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_DETAILS_FAIL",
    });
  }
};
