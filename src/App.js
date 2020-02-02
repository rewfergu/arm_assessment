import React from "react";
import { Global } from "@emotion/core";
import globalStyles from "./globalStyles";

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

export default function App() {
  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <main className="App">
        <h1>Candidates</h1>
        <section>
          <CandidatesChart
            currentWeek={currentWeek}
            previousWeek={previousWeek}
            width={450}
          />
        </section>
      </main>
    </React.Fragment>
  );
}
