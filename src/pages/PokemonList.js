import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchPokemonList } from "../actions/index";

const PokemonList = (props) => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);

  React.useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    dispatch(FetchPokemonList());
  };

  const Data = () => {
    console.log(pokemonList);
    if (pokemonList.loading) {
      return <p>Loading...</p>;
    }

    if (pokemonList.data.length > 0) {
      return (
        <div className={"list-wrapper"}>
          {pokemonList.data.map((el) => {
            return (
              <div className={"pokemon-item"}>
                <p>{el.name}</p>
              </div>
            );
          })}
        </div>
      );
    }

    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }

    return <p>unable to get data</p>;
  };

  return <div>{Data()}</div>;
};

export default PokemonList;
