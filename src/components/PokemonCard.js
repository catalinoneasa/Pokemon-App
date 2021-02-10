import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ name, pokemonId }) => {
  return (
    <Link to={`/pokemon/${name}`}>
      <div className={`pokemon-card`}>
        <div className={"pokemon-card__content"}>
          <div className="pokemon-card__image">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
              alt="pokemon"
            />
          </div>
          <h2>{name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
