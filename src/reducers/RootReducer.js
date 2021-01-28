import { combineReducers } from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonDetailsReducer from "./PokemonDetailsReducer";

const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: PokemonDetailsReducer,
});

export default RootReducer;
