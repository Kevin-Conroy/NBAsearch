import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import SearchBar from "./SearchBar";

function PlayerInfo(props) {
  return (
    <div>
      <h3>{props.match.params.playerId}</h3>
      <h4>
         (Where I want props from player map in app to load)
      </h4>
    </div>
  );
}
export default PlayerInfo;
