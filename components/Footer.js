import styled from "styled-components";

export class FooterBase extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="divider" />
        <div className="bottom-half"></div>
        <div className="message">
          Work with me?
        </div>
      </div>
    );
  }
}

export const Footer = styled(FooterBase)`
  position: relative;
  height: 400px;
  background-color: #d1cbbd;

  .divider {
    width: 100%;
    height: 350px;
    background-color: #8d7535;
  }

  .bottom-half {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 400px;
    background-color: #d1cbbd;
    clip-path: polygon(0 68%, 100% 30%, 100% 100%, 0 100%);
  }

  .message {
    position: absolute;
    bottom: 100px;
    right: 100px;
    color: #63615a;
    font-size: 20px;
    cursor: pointer;
    letter-spacing: 3px;
  }
`;