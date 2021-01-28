import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchPokemonDetails } from "../actions/index";
import _ from "lodash";
import { Link } from "react-router-dom";

const PokemonCard = ({ name }) => {
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);
  console.log(pokemonState.data[name]);
  React.useEffect(() => {
    dispatch(FetchPokemonDetails(name));
  }, []);

  const Data = () => {
    if (pokemonState.data[name] !== undefined) {
      const pokeData = pokemonState.data[name];
      return (
        <div className={"pokemon-wrapper"}>
          <div className={"item"}>
            <img src={pokeData.sprites.front_default} alt="pokemon-image" />
          </div>
        </div>
      );
    }

    if (pokemonState.loading) {
      return <p>Gonna Catch 'Em All...</p>;
    }

    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>;
    }

    return <p>Sorry, Can't catch them all</p>;
  };
  return (
    <Link to={`/pokemon/${name}`}>
      <div className={"pokemon-card"}>
        <h1>{name}</h1>
        {Data()}
      </div>
    </Link>
  );
};

export default PokemonCard;
