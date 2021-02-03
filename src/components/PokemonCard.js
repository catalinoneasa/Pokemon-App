import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonDetails } from "../actions/index";
import { Link } from "react-router-dom";

const PokemonCard = ({ name }) => {
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);

  React.useEffect(() => {
    dispatch(fetchPokemonDetails(name));
  }, [name]);

  const Data = () => {
    if (pokemonState.data[name] !== undefined) {
      const pokeData = pokemonState.data[name];
      return (
        <div className={`pokemon-wrapper ${pokeData.types[0].type.name}`}>
          <div className={"pokemon-card"}>
            <div className="pokemon-card__image">
              <img src={pokeData.sprites.front_default} alt="pokemon" />
            </div>
            <h2>{name}</h2>
          </div>
        </div>
      );
    }

    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>;
    }
  };
  return <Link to={`/pokemon/${name}`}>{Data()}</Link>;
};

export default PokemonCard;
