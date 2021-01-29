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
        <div>
          <div className="pokemon-details__images">
            <img src={pokemonData.sprites.front_default} />
            <img src={pokemonData.sprites.front_female} />
            <img src={pokemonData.sprites.back_default} />
            <img src={pokemonData.sprites.back_female} />
          </div>
          <div className="pokemon-details__description">
            <h2>{pokemonName} </h2>
            <div className="pokemon-details__type">
              {pokemonData.types.map((el) => {
                return <p className={el.type.name}>{el.type.name}</p>;
              })}
            </div>
            <div className="pokemon-details__stats">
              <ul>
                {pokemonData.stats.map((el) => {
                  return (
                    <li>
                      {el.stat.name} : {el.base_stat}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="pokemon-details_home-link">
              <Link to="/">Home </Link>
            </div>
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
    <div
      className={`pokemon-details ${pokemonState.data[pokemonName].types[0].type.name}`}
    >
      {Data()}
    </div>
  );
};

export default PokemonDetail;
