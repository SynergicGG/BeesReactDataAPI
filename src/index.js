import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class App extends React.Component {
  state = {
    bees: []
  };

  constructor() {
    super();
    this.getBees();
  }

  getBees() {
    fetch(`https://private-db1e9e-rrrwebapi11.apiary-mock.com/questions`)
      .then(data => data.json())
      .then(bees => {
        this.setState({ bees: bees.bees });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let beerNames = this.state.bees.map(bee => (
      <li>
        <strong>{bee.name}</strong> - {bee.tagline}
      </li>
    ));
    return <ol>{beerNames}</ol>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
