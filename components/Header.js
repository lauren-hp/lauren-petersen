import styled from "styled-components";
import { Menu } from "./Menu";

export class HeaderBase extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="sun" />
        <div className="orbit-1 orbit" />
        <div className="orbit-2 orbit" />
        <div className="orbit-3 orbit" />

        <div className="star star1" />
        <div className="star star2" />

        {!this.props.isMenuOpen && (
          <div>
            <div className="font title">
              lauren petersen
            </div>
      
            <div className="font subtitle">
              Hi there. I am a 
              <span className="emphasis"> software developer </span>
              with a passion for frontend development. I am also a
              <span className="emphasis"> writer </span>
               and an avid reader. I live in
              <span className="emphasis"> New York</span>.
            </div>
          </div>
        )}

        {this.props.isMenuOpen && <Menu />}
        </div>
    )
  }
}

export const Header = styled(HeaderBase)`
  .star {
    position: absolute;
    border-radius: 50%;
    background-color: ${props => props.isMenuOpen ? "#ededed" : "white"};
  }

  .star1 {
    animation: circle 12s infinite linear;
    height: 30px;
    width: 30px;
    left: -120px;
    top: 85px;
    margin-left: 100px;
    transform-origin: 118px center;
  }

  /* .star2 {
    animation: circle 10s infinite linear;
    height: 20px;
    width: 20px;
    left: -310px;
    top: 155px;
    margin-left: 200px;
    transform-origin: 280px center;
  } */

  .orbit {
    position: absolute;
    height: 400px;
    width: 400px;
    border-radius: 50%;
    border: 1px solid;
    border-color: ${props => props.isMenuOpen ? "#cecece" : "white"};
  }

  .sun {
    position: absolute;
    left: -4px;
    top: -4px;
    height: 200px;
    width: 200px;
    border: 4px solid;
    border-color: ${props => props.isMenuOpen ? "#ededed" : "white"};
    z-index: 1;
    border-radius: 50%;
  }

  .orbit-1 {
    left: -120px;
    top: -120px;
    /* padding: 70px; */
  }

  .orbit-2 {
    left: -170px;
    top: -170px;
    /* padding: 150px; */
  }

  .orbit-3 {
    left: -210px;
    top: -210px;
    padding: 230px;
  }

  .font {
    font-family: 'Sorts Mill Goudy', serif;
    color: white;
  }

  .title {
    font-size: 60px;
    position: absolute;
    top: 250px;
    right: 50px;
    letter-spacing: 5px;
  }

  .subtitle {
    position: absolute;
    width: 50%;
    right: 50px;
    top: 400px;
    font-size: 20px;
    font-weight: 300;
    line-height: 2;
    letter-spacing: 2px;
    text-align: justify;
  }

  .emphasis {
    color: #8d7535;
  }

  @keyframes circle { to { transform: rotate(1turn); } }
`