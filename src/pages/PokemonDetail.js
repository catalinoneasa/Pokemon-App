import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PokemonDetail = (props) => {
  const pokemonName = props.match.params.pokemonName;
  const pokemonState = useSelector((state) => state.Pokemon);

  const Data = () => {
    const pokemon = pokemonState.data[pokemonName];
    const { sprites, stats, types, name } = pokemon;

    if (pokemon !== undefined) {
      const frontDefault = sprites.front_default;
      const frontFemale = sprites.front_female;
      const backDefault = sprites.back_default;
      const backFemale = sprites.back_female;

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
            <h2>{name} </h2>
            <div className="pokemon-details__type">
              {types.map((el) => {
                return (
                  <p className={el.type.name} key={el.type.name}>
                    {el.type.name}
                  </p>
                );
              })}
            </div>
            <div className="pokemon-details__stats">
              <ul>
                {stats.map((el) => {
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
