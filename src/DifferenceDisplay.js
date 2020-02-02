import React from "react";
import styled from "@emotion/styled";
// import { colors } from "./util";

import DifferenceIcon from "./DifferenceIcon";

class DifferenceDisplay extends React.PureComponent {
  state = {
    listItems: []
  };
  componentDidMount() {
    console.log("rendering difference");
    const { currentWeek, previousWeek } = this.props;
    const listItems = currentWeek.map((category, index) => {
      const diff =
        (category.value - previousWeek[index].value) /
        previousWeek[index].value;

      let type;
      if (diff > 0) {
        type = "positive";
      } else if (diff < 0) {
        type = "negative";
      } else {
        type = "neutral";
      }

      const formattedValue = Math.abs(diff * 100).toFixed(1);

      return (
        <DisplayItem
          key={`${category.name}-diff`}
          category={category.name}
          type={type}
        >
          {formattedValue} %
        </DisplayItem>
      );
    });

    this.setState({
      listItems
    });
  }

  render() {
    return (
      <Container {...this.props}>
        <DisplayList>{this.state.listItems}</DisplayList>
      </Container>
    );
  }
}

const Container = styled.div`
  width: ${props => props.width * 0.45}px;
  height: ${props => props.width * 0.45}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  font-size: 1.5em;
  text-align: left;
`;

const DisplayList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
`;

const DisplayItem = props => {
  return (
    <li
      style={{
        marginBottom: "10px"
      }}
    >
      <span
        style={{
          display: "inline-block",
          marginRight: "10px"
        }}
      >
        <DifferenceIcon
          type={props.type}
          category={props.category}
          style={{ background: "red" }}
        />
      </span>
      {props.children}
    </li>
  );
};

export default DifferenceDisplay;
