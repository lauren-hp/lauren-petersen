import React from "react";
import styled from "styled-components";

export default class Menu extends React.Component {
  render() {
    return (
      <Background />
    );
  }
}

const Background = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  opacity: 0.1;
  z-index: 4;
`

