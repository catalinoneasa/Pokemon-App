import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PokemonDetail = (props) => {
  const pokemonName = props.match.params.pokemonName;
  const pokemonState = useSelector((state) => state.Pokemon);

  const Data = () => {
    if (pokemonState.data[pokemonName] !== undefined) {
      const pokemonData = pokemonState.data[pokemonName];
      const frontDefault = pokemonData.sprites.front_default;
      const frontFemale = pokemonData.sprites.front_female;
      const backDefault = pokemonData.sprites.back_default;
      const backFemale = pokemonData.sprites.back_female;

      return (
        <div>
          <div className="pokemon-details__images">
            {frontDefault ? (
              <img src={frontDefault} alt="pokemon front" />
            ) : null}

            {frontFemale ? (
              <img src={frontFemale} alt="pokemon female front" />
            ) : null}

            {backDefault ? <img src={backDefault} alt="pokemon back" /> : null}

            {backFemale ? (
              <img src={backFemale} alt="pokemon female back " />
            ) : null}
          </div>
          <div className="pokemon-details__description">
            <h2>{pokemonName} </h2>
            <div className="pokemon-details__type">
              {pokemonData.types.map((el) => {
                return (
                  <p className={el.type.name} key={el.type.name}>
                    {el.type.name}
                  </p>
                );
              })}
            </div>
            <div className="pokemon-details__stats">
              <ul>
                {pokemonData.stats.map((el) => {
                  return (
                    <li key={el.stat.name}>
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
