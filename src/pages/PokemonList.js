import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "../actions/index";
import PokemonCard from "../components/PokemonCard";
import logo from "../assets/logo.png";

const PokemonList = (props) => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);
  const [searchTerm, setsearchTerm] = useState("");
  const [debouncedTerm, setdebouncedTerm] = useState("");

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setdebouncedTerm(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

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
                el.name.toLowerCase().includes(debouncedTerm.toLowerCase())
              ) {
                return el;
              }
              return null;
            })
            .map((el) => {
              const splitUrl = el.url.split("/");
              const pokemonId = splitUrl[splitUrl.length - 2];
              return (
                <PokemonCard
                  key={el.name}
                  name={el.name}
                  pokemonId={pokemonId}
                />
              );
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
            placeholder="Search Pokemon By Name..."
            onChange={(e) => setsearchTerm(e.target.value)}
          />
        </div>
      </div>
      {Data()}
    </div>
  );
};

export default PokemonList;
