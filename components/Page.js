import React from "react";
import Meta from "./Meta";
import styled from "styled-components";
import { Header } from "./Header";
import { FaBars } from "react-icons/fa";
import { SolarSystem } from "./SolarSystem";
import { About } from "./About";
import { Menu } from "./Menu";
import { Me } from "./Me";
import { Footer } from "./Footer";
import * as cn from "classnames";

export default class Page extends React.Component {
  state = {
    isMenuOpen: false
  }

  toggleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  render() {
    return (
      <Content>
        <Meta />
        <SolarSystem isMenuOpen={this.state.isMenuOpen} />
        {this.state.isMenuOpen && <Menu toggleMenu={this.toggleMenu} />}
        <div className="page-content">
          <div className="menu-button" onClick={this.toggleMenu}>
            <FaBars className={cn({"menu-open": this.state.isMenuOpen })} />
          </div>
          <div className="body-content">
            <a id="home">
              <Header isMenuOpen={this.state.isMenuOpen} />
            </a>
            <Me />
            <a id="resume">
              <About />
            </a>
            <Footer />
          </div>
        </div>
        {this.props.children}
      </Content>
    );
  }
}

const Content = styled.div`
  * {
    box-sizing: border-box;
  }

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #d1cbbd;
  font-family: 'Sorts Mill Goudy', serif;

  .page-content {
    height: 100vh;
    width: 100%;
    overflow-y: auto;
  }

  .body-content {
    margin-top: 80px;
  }

  .menu-button {
    font-size: 20px;
    position: absolute;
    right: 40px;
    top: 30px;
    color: white;
    z-index: 3;

    &:hover {
      cursor: pointer;
    }
  }

  .menu-open {
    color: black;
  }
`