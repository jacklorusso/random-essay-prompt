import React, { Component } from "react";

import quotes from "./quotes";

function randomDescription(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <p>{randomDescription(quotes)}</p>
      </div>
    );
  }
}

export default App;
