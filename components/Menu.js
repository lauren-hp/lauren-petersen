import React from "react";
import styled from "styled-components";

export class MenuBase extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="link link1">
          home
        </div>
        <div className="link link2">
          resume
        </div>
        <div className="link link3">
          github
        </div>
        <div className="link link4">
          contact
        </div>
      </div>
    );
  }
}

export const Menu = styled(MenuBase)`
  height: 100vh;
  width: 100%;
  z-index: 4;
  background-color: white;
  animation-name: "fade-in";
  animation-duration: 1s;

  @keyframes fade-in {
    0% {
      background-color: #d1cbbd;
    }
    100% {
      background-color: white;      
    }
  } 

  .link {
    font-family: 'Sorts Mill Goudy', serif;
    position: absolute;
    font-size: 20px;
    font-weight: 400;
    animation-name: "pop-in";
    letter-spacing: 2px;

    &:hover {
      color: #8d7535;
      cursor: pointer;
    }
  }

  .link1 {
    right: 30%;
    top: 40%;
    animation-duration: 0.11s; 
  }

  .link2 {
    right: 15%;
    top: 50%;
    animation-duration: 0.25s;  
  }

  .link3 {
    right: 40%;
    top: 60%;
    animation-duration: 0.38s;  
  }

  .link4 {
    right: 25%;
    top: 70%;
    animation-duration: 0.5s;  
  }

  @keyframes pop-in {
    0% {
      opacity: 0
    }
    99% {
      opacity: 0
    }
    100% {
      opacity: 1
    } 
  }
`

