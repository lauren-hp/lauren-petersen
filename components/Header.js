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

  .header-text {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 70px;
  }

  .font {
    font-family: 'Sorts Mill Goudy', serif;
    color: white;
  }

  .title {
    font-size: 60px;
    padding-top: 400px;
    letter-spacing: 5px;
  }

  .subtitle {
    width: 680px;
    padding-top: 10px;
    font-size: 20px;
    font-weight: 300;
    line-height: 2;
    letter-spacing: 2px;
    text-align: right;
  }

  .emphasis {
    color: #8d7535;
  }
`