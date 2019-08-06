import styled from "styled-components"

export class SolarSystemBase extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="sun" />
        <div className="orbit-1 orbit" />
        <div className="orbit-2 orbit" />
        <div className="orbit-3 orbit" />

        <div className="star star1" />
        <div className="star star2" />
        <div className="star star3" />
      </div>
    )
  }
}

export const SolarSystem = styled(SolarSystemBase)`
  > * {
    z-index: 1;
  }
  
  .star {
    position: absolute;
    border-radius: 50%;
    background-color: ${props => props.isMenuOpen ? "#ededed" : "white"};
  }

  .star1 {
    animation: circle 10s infinite linear;
    height: 20px;
    width: 20px;
    left: -270px;
    top: 85px;
    margin-left: 100px;
    transform-origin: 265px center;
  }

  .star2 {
    animation: circle 50s infinite linear;
    height: 20px;
    width: 20px;
    left: -415px;
    top: 85px;
    margin-left: 100px;
    transform-origin: 415px center; 
  }

  .star3 {
    animation: circle 80s infinite linear;
    height: 20px;
    width: 20px;
    left: -570px;
    top: 85px;
    margin-left: 100px;
    transform-origin: 565px center; 
  }

  .orbit {
    position: absolute;
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
    height: 500px;
    width: 500px;
    /* Note: Origin is 100px, 100px */
    left: -150px;
    top: -150px;
  }

  .orbit-2 {
    height: 800px;
    width: 800px;
    /* Note: Origin is 100px, 100px */
    left: -300px;
    top: -300px;
  }

  .orbit-3 {
    height: 1100px;
    width: 1100px;
    /* Note: Origin is 100px, 100px */
    left: -450px;
    top: -450px;
  }

  @keyframes circle { from { transform: rotate(1turn); } }
`