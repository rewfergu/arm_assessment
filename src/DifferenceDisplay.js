import React from "react";
import styled from "@emotion/styled";

import DifferenceIcon from "./DifferenceIcon";

class DifferenceDisplay extends React.PureComponent {
  state = {
    listItems: []
  };
  componentDidMount() {
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

      return {
        name: category.name,
        value: formattedValue,
        type
      };
    });

    this.setState({
      listItems
    });
  }

  render() {
    return (
      <Container {...this.props}>
        <DisplayList>
          {this.state.listItems.map((item, index) => (
            <DisplayItem
              key={`${item.name}-diff`}
              index={index}
              category={item.name}
              type={item.type}
              className={this.props.active === item.name ? "active" : ""}
            >
              {item.value} %
            </DisplayItem>
          ))}
        </DisplayList>
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
    <StyledDisplayItem {...props}>
      <span>
        <DifferenceIcon
          type={props.type}
          category={props.category}
          style={{ background: "red" }}
        />
      </span>
      {props.children}
    </StyledDisplayItem>
  );
};

const StyledDisplayItem = styled.li`
  padding: 10px 25px 5px;
  border-radius: 4px;
  transition: background-color 0.23s;
  opacity: 0;
  animation-name: fadein;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: ${props => 2000 + 200 * props.index}ms;

  &.active {
    background: rgba(0, 0, 0, 0.05);
  }

  span {
    display: inline-block;
    margin-right: 10px;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export default DifferenceDisplay;
