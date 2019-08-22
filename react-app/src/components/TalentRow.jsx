import React, { Component } from "react";
import Talent from "./Talent";
import uuidv4 from "uuid/v4";

export default class TalentRow extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-start align-items-center">
          <div className="col-sm-2" style={{ margin: "1em 1em" }}>
            <h3>Level {this.props.talentTier}</h3>
          </div>
          {this.props.randomHero.talents[this.props.talentTier].map(talent => (
            <div className="col-sm-2" style={{ margin: "1em 1em" }}>
              <Talent
                key={uuidv4()}
                talent={talent}
                randomHero={this.props.randomHero}
                randomNumber={this.props.randomNumber}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
