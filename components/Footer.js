import styled from "styled-components";
// import photo from "../assets/lauren.jpg";

export class FooterBase extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        
        <div className="footer-content">
          {/* <img src={photo} /> */}
        </div>
        <div className="footer-border" />

      </div>
    );
  }
}

export const Footer = styled(FooterBase)`
  height: 100vh;
  position: relative;

  .footer-content {
    width: 200px;
    height: 200px;
    background-color: cornflowerblue;
  }

  .footer-border {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 600px;
    background-color: #8d7535;
    clip-path: polygon(0 68%, 100% 30%, 100% 100%, 0 100%);
  }
`;