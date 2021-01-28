import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchPokemonList } from "../actions/index";
import PokemonCard from "../components/PokemonCard";
import { useState } from "react";

const PokemonList = (props) => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);
  const [searchTerm, setsearchTerm] = useState("");

  React.useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    dispatch(FetchPokemonList());
  };

  const Data = () => {
    if (pokemonList.loading) {
      return <p>Loading...</p>;
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
            })
            .map((el) => {
              return <PokemonCard name={el.name} />;
            })}
        </div>
      );
    }

    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }

    return <p>unable to get data</p>;
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokemon"
        onChange={(e) => {
          setsearchTerm(e.target.value);
        }}
      />
      {Data()}
    </div>
  );
};

export default PokemonList;
