import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonDetails } from "../actions";

const PokemonDetail = (props) => {
  const pokemonName = props.match.params.pokemonName;
  const pokemonState = useSelector((state) => state.Pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonDetails(pokemonName));
  }, [pokemonName]);

  const Data = () => {
    const pokemon = pokemonState.data[pokemonName];
    if (pokemon !== undefined) {
      const {
        sprites: { front_default, front_female, back_default, back_female },
        stats,
        types,
        name,
      } = pokemon;

      return (
        <div className={`pokemon-details ${types[0].name}`}>
          <div className="pokemon-details__images">
            {front_default ? (
              <img src={front_default} alt="pokemon front" />
            ) : null}

            {front_female ? (
              <img src={front_female} alt="pokemon female front" />
            ) : null}

            {back_default ? (
              <img src={back_default} alt="pokemon back" />
            ) : null}

            {back_female ? (
              <img src={back_female} alt="pokemon female back " />
            ) : null}
          </div>
          <div className="pokemon-details__description">
            <h2>{name} </h2>
            <div className="pokemon-details__type">
              {types.map((el) => {
                const typeName = el.type.name;
                return (
                  <p className={typeName} key={typeName}>
                    {typeName}
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
      return <div className="pokemon details-loading"></div>;
    }

    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>;
    }

    return <p>Error Getting Pokemon</p>;
  };

  return Data();
};

export default PokemonDetail;
