import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export class FooterBase extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="divider" />
        <div className="bottom-half"></div>
        <div className="link">
          <a href="https://www.linkedin.com/in/laurenhpetersen/">
            <FaLinkedin size={24} />
          </a>

          <a href="https://github.com/lauren-hp/">
            <FaGithub size={24} />
          </a>
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
    height: 300px;
    background-color: #d1cbbd;
    clip-path: polygon(0 68%, 100% 30%, 100% 100%, 0 100%);
  }

  .link {
    position: absolute;
    bottom: 100px;
    right: 100px;
    color: #63615a;
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 10px;
    cursor: pointer;

    > a {
      text-decoration: none;
      color: inherit;
    }
  }
`;