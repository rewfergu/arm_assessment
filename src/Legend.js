import React from "react";
import styled from "@emotion/styled";

import { colors } from "./util";

const Legend = props => {
  return (
    <Container>
      <List>
        <StyledListItem
          type="New"
          className={props.active === "New" ? "active" : ""}
        />
        <StyledListItem
          type="Screened"
          className={props.active === "Screened" ? "active" : ""}
        />
        <StyledListItem
          type="Interviewed"
          className={props.active === "Interviewed" ? "active" : ""}
        />
        <StyledListItem
          type="Assignment"
          className={props.active === "Assignment" ? "active" : ""}
        />
      </List>
    </Container>
  );
};

const ListItem = props => <li {...props}>{props.type}</li>;

const Container = styled.div``;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  li {
    padding: 5px 10px;
    position: relative;
    transition: all 0.23s;
    bottom: 0;
    border-bottom: 3px solid transparent;
  }
`;

const StyledListItem = styled(ListItem)`
  &:before {
    display: inline-block;
    content: "";
    height: 10px;
    width: 10px;
    margin-right: 5px;
    background: ${props => colors[props.type]};
  }

  &.active {
    border-bottom: 3px solid #ccc;
    bottom: 5px;
  }
`;

export default Legend;
