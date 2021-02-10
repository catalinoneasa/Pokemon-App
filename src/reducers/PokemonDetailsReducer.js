const DefaultState = {
  loading: false,
  data: {},
  errorMsg: "",
};

const PokemonDetailsReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "POKEMON_DETAILS_LOADING":
      return { ...state, loading: true, errorMsg: "" };
    case "POKEMON_DETAILS_SUCCESS":
      return {
        ...state,
        loading: false,
        errorMsg: "",
        data: { ...state.data, [action.payload.name]: action.payload },
      };
    case "POKEMON_DETAILS_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "Error getting Pokemon Details",
      };

    default:
      return state;
  }
};

export default PokemonDetailsReducer;
