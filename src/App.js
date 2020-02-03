import React from "react";
import { Global } from "@emotion/core";
import globalStyles from "./globalStyles";
import { currentWeek, previousWeek } from "./data";

import CandidatesChart from "./CandidatesChart";

export default function App() {
  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <main className="App">
        <section>
          <h1>Candidates</h1>
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
