import React, { Component } from "react";
import SearchBar from "./SearchBar";
import "./App.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import PlayerInfo from "./PlayerInfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      playerData: [],
    };
    this.handleUpdatePlayers = this.handleUpdatePlayers.bind(this);
  }

  handleUpdatePlayers(data) {
    this.setState({ playerData: data });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <SearchBar handleUpdatePlayers={this.handleUpdatePlayers} />

        <Route exact path="/player/:playerId" component={PlayerInfo} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>Results:</h3>
          {this.state.playerData.map((player) => (
            <ul key={player.id}>
              <Link to={`/player/${player.id}`}>
                <h4>
                  {player.first_name} {player.last_name} 
                </h4>
              </Link>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
