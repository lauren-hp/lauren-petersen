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

        {!this.props.isMenuOpen && (
          <div>
            <div className="font title">
              lauren petersen
            </div>
      
            <div className="font subtitle">
              bookworm / 
              <span className="emphasis"> software developer </span>
               / cheesemaker / museum-goer / hiker / philosophy student /
              traveler / art enthusiast / 
              <span className="emphasis"> writer </span>
               / failed chemist / cat lady / stargazer / runner / 
              oxford comma proponent / coloradoan / woman / 
              <span className="emphasis"> new yorker </span>
               / data lover / bookbinder 
            </div>
          </div>
        )}

        {this.props.isMenuOpen && <Menu />}
        </div>
    )
  }
}

export const Header = styled(HeaderBase)`
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
    background-color: ${props => props.isMenuOpen ? "#eaeaea" : "white"};
    z-index: 1;
    border-radius: 50%;
  }

  .orbit-1 {
    left: -120px;
    top: -120px;
    padding: 70px;
  }

  .orbit-2 {
    left: -170px;
    top: -170px;
    padding: 150px;
  }

  .orbit-3 {
    left: -210px;
    top: -210px;
    padding: 230px;
  }


  .font {
    font-family: 'Roboto', sans-serif;
    color: white;
  }

  .title {
    font-size: 70px;
    position: absolute;
    top: 250px;
    right: 50px;
    letter-spacing: 13px;
    
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
    color: black;
  }
`