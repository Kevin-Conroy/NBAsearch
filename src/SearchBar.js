import React from "react";
import reactDom from "react-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
  }

  handleUpdateSearchTerm(searchTerm) {
    this.setState({ searchTerm });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Submitting");
    //This is where variables for search terms will live.
    //This is where the API call will live.

    const encodedName = encodeURIComponent(this.state.searchTerm);
    const URL = `https://www.balldontlie.io/api/v1/players?search=${encodedName}`;

    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((responseJSON) => {
        console.log(responseJSON);
        this.props.handleUpdatePlayers(responseJSON.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      >
        <label for="title" style={{ padding: "10px" }}>
          Search for a player here:
        </label>
        <input
          type="text"
          placeholder="Name"
          value={this.state.searchTerm}
          onChange={(event) => this.handleUpdateSearchTerm(event.target.value)}
        ></input>

        <button onClick={(event) => this.handleSubmit(event)}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
