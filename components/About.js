import styled from "styled-components";

export class AboutBase extends React.Component {
  renderBulletPoint = (message) => {
    return (
      <div className="bullet-point">
        <div>
          →
        </div>
        <div>
          {message}
        </div>
      </div>
    )
  }

  render(){
    const { renderBulletPoint } = this;

    return (
      <div className={this.props.className}>
        <div className="side-content">
          <div className="side-label">
            life's work
          </div>
        </div>
        <div className="text-content">
          <div className="resume-section">
            <div className="resume-section">
              <div className="title">
                tech stack
              </div>
              {renderBulletPoint("typescript, react, redux, redux sagas, graphql, apollo, css, jest ")}
            </div>
            <div className="title">
              experience
            </div>
            {renderBulletPoint("mar 2019 - present: wework, lead software engineer")}
            {renderBulletPoint("mar 2018 - mar 2019: wework, software engineer")}
            {renderBulletPoint("may 2016 - june 2017: university of chicago human behavioral pharmacology lab, intern")}
            {renderBulletPoint("june 2015 - sep 2015: university of colorado linda crnic institute for down syndrome, intern")}
            {renderBulletPoint("june 2014 - sep 2014: national wildlife research center, intern")}
          </div>
        

          <div className="resume-section">
            <div className="title">
              education
            </div>
            {renderBulletPoint("aug 2017 - dec 2017: flatiron school full stack development")}
            {renderBulletPoint("sep 2013 - june 2017: university of chicago, BA philosophy with honors, pre-medical track")}
          </div>

          <div className="resume-section">
            <div className="title">
              publications
            </div>
            {renderBulletPoint(`the new york times, may 27, 2017: "wanting monogamy as 1,946 men await my swipe"`)}
            {renderBulletPoint(`human-wildlife interactions, sep 2017: "inventory of wildlife use of mortality pits as feeding sites: implications of pathogen exposure"`)}
          </div>
        </div>
      </div>
    )
  }
}

export const About = styled(AboutBase)`
  background-color: #d1cbbd;
  min-height: calc(100vh - 80px);
  display: grid;
  grid-template-columns: 1fr 1fr;

  .side-content {
    background-color: #8d7535;
  }

  .side-label {
    text-align: center;
    vertical-align: middle;
    line-height: calc(100vh - 80px);
    font-size: 40px;
    color: white;
    letter-spacing: 10px;
  }

  .text-content {
    width: 100%;
    padding: 40px 30px 0;
    align-self: center;
  }

  .resume-section {
    padding-bottom: 30px;
  }

  .title {
    font-size: 20px;
    letter-spacing: 1px;
    color: #8d7535;
  }

  .bullet-point {    
    padding: 3px;
    font-size: 14px;
    letter-spacing: 1px;
    color: #63615a;
    display: grid;
    grid-template-columns: 20px 1fr;
    line-height: 24px;
  }
`