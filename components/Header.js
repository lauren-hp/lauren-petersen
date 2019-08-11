import styled from "styled-components";

export class HeaderBase extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        {!this.props.isMenuOpen && (
          <div className="header-text">
            <div className="font title">
              lauren petersen
            </div>
      
            <div className="font subtitle">
              I am a
              <span className="emphasis"> software developer </span>
              with a focus in frontend development. I am also a
              <span className="emphasis"> writer</span>.
              I live in
              <span className="emphasis"> New York</span>.
            </div>
          </div>
        )}
        </div>
    )
  }
}

export const Header = styled(HeaderBase)`
  /* Subtract top margin */
  height: calc(100vh - 80px);

  .font {
    font-family: 'Sorts Mill Goudy', serif;
    color: white;
  }

  .header-text {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .title {
    letter-spacing: 5px;
    text-align: right;
  }

  .subtitle {
    font-weight: 300;
    line-height: 2;
    letter-spacing: 2px;
    text-align: right;
  }

  .emphasis {
    color: #8d7535;
  }

  @media screen and (max-width: 639px) {
    .title {
      padding-top: calc(60vh);
      font-size: 40px;
      padding-right: 15px;
    }

    .subtitle {
      padding: 30px 15px 0;
    }
  }

  @media screen and (min-width: 630px) {
    .title {
      padding-top: calc(50vh);
      font-size: 60px;
    }

    .header-text {
      padding-right: 70px;
    }

    .subtitle {
      width: 680px;
      font-size: 20px;
      padding-top: 10px;
    }
  }
`