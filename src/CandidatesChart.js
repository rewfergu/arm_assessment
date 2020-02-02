import React from "react";
import styled from "@emotion/styled";

import Legend from "./Legend";
import Donut from "./Donut";
import DifferenceDisplay from "./DifferenceDisplay";

class CandidatesChart extends React.Component {
  state = {
    active: ""
  };

  activateElement = name => {
    this.setState({
      active: name
    });
  };

  deactivateElement = name => {
    this.setState({
      active: ""
    });
  };

  render() {
    return (
      <Container>
        <Chart>
          <Donut
            currentWeek={this.props.currentWeek}
            activateElement={this.activateElement}
            deactivateElement={this.deactivateElement}
            width={this.props.width}
          />
          <DifferenceDisplay
            currentWeek={this.props.currentWeek}
            previousWeek={this.props.previousWeek}
            width={this.props.width}
          />
        </Chart>
        <Legend active={this.state.active} />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 450px;
  margin: 0 auto;
`;

const Chart = styled.div`
  width: 450px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export default CandidatesChart;
