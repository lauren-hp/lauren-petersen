import styled from "styled-components";

export class MeBase extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <img className="photo" src="/static/lauren.jpg" alt="my image" />
        <div className="me-border" />

      </div>
    );
  }
}

export const Me = styled(MeBase)`
  position: relative;
  background-color: #d1cbbd;
  height: 500px;

  .photo {
    position: absolute;
    padding: 30px;
    border: 1px white solid;
    z-index: 2;
    top: 100px;
    right: 10%;
    height: 300px;
    border-radius: 50%;
  }

  .me-border {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 400px;
    background-color: #8d7535;
    clip-path: polygon(0 68%, 100% 30%, 100% 100%, 0 100%);
  }
`;