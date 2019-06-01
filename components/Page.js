import React from "react";
import Meta from "./Meta";
import styled from "styled-components";
import { Header } from "./Header";

export default class Page extends React.Component {
  state = {
    isMenuOpen: false
  }

  openMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  render() {
    return (
      <Content>
        <Meta />
        <Header isMenuOpen={this.state.isMenuOpen} />
        <div className="button" onClick={this.openMenu} />
        {this.props.children}
      </Content>
    );
  }
}

const Content = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #bababa;
  position: relative;

  .button {
    position: absolute;
    right: 60px;
    top: 60px;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    z-index: 5;

    &:hover {
      cursor: pointer;
    }
  }
`