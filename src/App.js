import React from "react";

import "./styles.css";
import CandidatesChart from "./CandidatesChart";

const currentWeek = [
  {
    name: "New",
    value: 450
  },
  {
    name: "Screened",
    value: 100
  },
  {
    name: "Interviewed",
    value: 30
  },
  {
    name: "Assignment",
    value: 100
  }
];

const previousWeek = [
  {
    name: "New",
    value: 400
  },
  {
    name: "Screened",
    value: 150
  },
  {
    name: "Interviewed",
    value: 25
  },
  {
    name: "Assignment",
    value: 100
  }
];

export default class App extends React.Component {
  state = {
    message: "hello world"
  };
  updateMessage = value => {
    this.setState({
      message: value
    });
  };
  render() {
    return (
      <main className="App">
        <h1>Hello CodeSandbox</h1>
        <section>
          <h2>Candidates</h2>
          <CandidatesChart
            currentWeek={currentWeek}
            previousWeek={previousWeek}
            width={450}
          />
        </section>
      </main>
    );
  }
}
