import React, { Component } from "react";
import TalentRow from "./TalentRow";

export default class TalentTable extends Component {
  generateRandomNumber = length => {
    return Math.floor(Math.random() * length + 1);
  };

  render() {
    return (
      <React.Fragment>
        <TalentRow
          key={this.props.talentTiers[0]}
          heroes={this.props.heroes}
          randomHero={this.props.randomHero}
          talentTier={this.props.talentTiers[0]}
          randomNumber={this.generateRandomNumber(
            this.props.randomHero.talents[1].length
          )}
        />

        <TalentRow
          key={this.props.talentTiers[1]}
          heroes={this.props.heroes}
          randomHero={this.props.randomHero}
          talentTier={this.props.talentTiers[1]}
          randomNumber={this.generateRandomNumber(
            this.props.randomHero.talents[4].length
          )}
        />

        <TalentRow
          key={this.props.talentTiers[2]}
          heroes={this.props.heroes}
          randomHero={this.props.randomHero}
          talentTier={this.props.talentTiers[2]}
          randomNumber={this.generateRandomNumber(
            this.props.randomHero.talents[7].length
          )}
        />

        <TalentRow
          key={this.props.talentTiers[3]}
          heroes={this.props.heroes}
          randomHero={this.props.randomHero}
          talentTier={this.props.talentTiers[3]}
          randomNumber={this.generateRandomNumber(
            this.props.randomHero.talents[10].length
          )}
        />

        <TalentRow
          key={this.props.talentTiers[4]}
          heroes={this.props.heroes}
          randomHero={this.props.randomHero}
          talentTier={this.props.talentTiers[4]}
          randomNumber={this.generateRandomNumber(
            this.props.randomHero.talents[13].length
          )}
        />

        <TalentRow
          key={this.props.talentTiers[5]}
          heroes={this.props.heroes}
          randomHero={this.props.randomHero}
          talentTier={this.props.talentTiers[5]}
          randomNumber={this.generateRandomNumber(
            this.props.randomHero.talents[16].length
          )}
        />

        <TalentRow
          key={this.props.talentTiers[6]}
          heroes={this.props.heroes}
          randomHero={this.props.randomHero}
          talentTier={this.props.talentTiers[6]}
          randomNumber={this.generateRandomNumber(
            this.props.randomHero.talents[20].length
          )}
        />
      </React.Fragment>
    );
  }
}
