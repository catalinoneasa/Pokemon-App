import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import "./css/main.css";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PokemonList} />
          <Route path="/pokemon/:pokemonName" exact component={PokemonDetail} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
