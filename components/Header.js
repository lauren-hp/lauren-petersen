import styled from "styled-components";
import Menu from "./Menu";

export default class Header extends React.Component {
  render() {
    return (
      <Background>
        <div className="sun" />
        <div className="orbit-1 orbit" />
        <div className="orbit-2 orbit" />
        <div className="orbit-3 orbit" />
        <div className="text-content">
          <div className="font title">
            lauren petersen
          </div>
    
          <div className="font subtitle">
            front end developer
          </div>
        </div>
        {/* <Menu /> */}
      </Background>
    )
  }
}

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  position: relative;

  .orbit {
    position: absolute;
    height: 400px;
    width: 400px;
    border-radius: 50%;
    border: 1px solid;
  }

  .sun {
    position: absolute;
    left: -20px;
    top: -20px;
    height: 250px;
    width: 250px;
    background-color: white;
    z-index: 1;
    border-radius: 50%;
  }

  .orbit-1 {
    left: -120px;
    top: -120px;
    padding: 70px;
    border-color: white;
  }

  .orbit-2 {
    left: -170px;
    top: -170px;
    padding: 150px;
    border-color: white;
  }

  .orbit-3 {
    left: -210px;
    top: -210px;
    padding: 230px;
    border-color: white;
  }

  .text-content {
    position: absolute;
    top: 100px;
    right: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }


  .font {
    font-family: 'Rokkitt', serif;
    font-weight: bold;
    color: white;
    letter-spacing: 13px;
  }

  .title {
    font-size: 70px;
  }

  .subtitle {
    padding-top: 20px;
    font-size: 30px;
  }
`