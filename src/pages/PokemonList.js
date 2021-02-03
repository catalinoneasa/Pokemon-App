import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchPokemonList } from "../actions/index";
import PokemonCard from "../components/PokemonCard";
import { useState } from "react";
import logo from "../assets/logo.png";

const PokemonList = (props) => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);
  const [searchTerm, setsearchTerm] = useState("");

  React.useEffect(() => {
    const FetchData = () => {
      dispatch(FetchPokemonList());
    };
    FetchData();
  }, []);

  const Data = () => {
    if (pokemonList.loading) {
      return <div className="pokemon"></div>;
    }

    if (pokemonList.data.length > 0) {
      return (
        <div className={"list-wrapper"}>
          {pokemonList.data
            .filter((el) => {
              if (searchTerm === "") {
                return el;
              } else if (
                el.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return el;
              }
              return null;
            })
            .map((el) => {
              return <PokemonCard key={el.name} name={el.name} />;
            })}
        </div>
      );
    }

    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }

    return <p>Unable to get data</p>;
  };

  return (
    <div className="pokemon-list__content">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Pokebook logo" />
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Search Pokemon by Name..."
            onChange={(e) => {
              setsearchTerm(e.target.value);
            }}
          />
        </div>
      </div>
      {Data()}
    </div>
  );
};

export default PokemonList;
