import React from "react";
import Meta from "./Meta";
import styled from "styled-components";
import Header from "./Header";

export default class Page extends React.Component {
  state = {
    isMenuOpen: false
  }

  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MenuButton />
        {this.props.children}
      </div>
    );
  }
}

const MenuButton = styled.div`
  
`