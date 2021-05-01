import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import SearchBar from "./SearchBar";

function PlayerInfo(props) {
  return (
    <div>
      <h3>{props.match.params.playerId}</h3>
      <h4>
         (This is where I want be able to access props from player map in app)
      </h4>
    </div>
  );
}
export default PlayerInfo;
