import React from "react";
import { BrowserRouter, Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import "./css/main.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PokemonList} />
          <Redirect to="/" />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
