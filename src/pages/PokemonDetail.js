import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PokemonDetail = (props) => {
  const pokemonName = props.match.params.pokemonName;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);

  const Data = () => {
    if (pokemonState.data[pokemonName] !== undefined) {
      const pokemonData = pokemonState.data[pokemonName];

      return (
        <div className={"pokemon-wrapper"}>
          <div className="item">
            <h1>Sprites</h1>
            <img src={pokemonData.sprites.front_default} />
            <img src={pokemonData.sprites.front_shiny} />
            <img src={pokemonData.sprites.front_female} />
            <img src={pokemonData.sprites.front_shiny_female} />
            <img src={pokemonData.sprites.back_default} />
            <img src={pokemonData.sprites.back_shiny} />
            <img src={pokemonData.sprites.back_female} />
            <img src={pokemonData.sprites.back_shiny_female} />
          </div>
          <div className="item">
            <h1>Types</h1>
            {pokemonData.types.map((el) => {
              return <p>{el.type.name}</p>;
            })}
          </div>
          <div className="item">
            <h1>Stats</h1>
            {pokemonData.stats.map((el) => {
              return (
                <p>
                  {el.stat.name} : {el.base_stat}
                </p>
              );
            })}
          </div>
        </div>
      );
    }

    if (pokemonState.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>;
    }

    return <p>error getting pokemon</p>;
  };
  return (
    <div>
      <h1>{pokemonName} </h1>
      {Data()}
      <Link to="/">Home </Link>
    </div>
  );
};

export default PokemonDetail;
