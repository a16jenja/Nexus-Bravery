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
          heroes={this.props.heroes}
          randomHero={this.props.randomHero}
          talentTier={this.props.talentTiers[0]}
          randomNumber={this.generateRandomNumber(
            this.props.randomHero.talents[1].length
          )}
        />

        <TalentRow
          heroes={this.props.heroes}
          randomHero={this.props.randomHero}
          talentTier={this.props.talentTiers[1]}
          randomNumber={this.generateRandomNumber(
            this.props.randomHero.talents[4].length
          )}
        />

        <TalentRow
          heroes={this.props.heroes}
          randomHero={this.props.randomHero}
          talentTier={this.props.talentTiers[2]}
          randomNumber={this.generateRandomNumber(
            this.props.randomHero.talents[7].length
          )}
        />

        <TalentRow
          heroes={this.props.heroes}
          randomHero={this.props.randomHero}
          talentTier={this.props.talentTiers[3]}
          randomNumber={this.generateRandomNumber(
            this.props.randomHero.talents[10].length
          )}
        />

        <TalentRow
          heroes={this.props.heroes}
          randomHero={this.props.randomHero}
          talentTier={this.props.talentTiers[4]}
          randomNumber={this.generateRandomNumber(
            this.props.randomHero.talents[13].length
          )}
        />

        <TalentRow
          heroes={this.props.heroes}
          randomHero={this.props.randomHero}
          talentTier={this.props.talentTiers[5]}
          randomNumber={this.generateRandomNumber(
            this.props.randomHero.talents[16].length
          )}
        />

        <TalentRow
          heroes={this.props.heroes}
          randomHero={this.props.randomHero}
          talentTier={this.props.talentTiers[6]}
          randomNumber={this.generateRandomNumber(
            this.props.randomHero.talents[20].length
          )}
        />
      </React.Fragment>

      /* <tr>
              <th scope="row">1</th>
              {this.props.randomHero.talents[1].map(talent => (
                <Talent
                  key={uuidv4()}
                  talent={talent.icon}
                  randomHero={this.props.randomHero}
                  selected={talent.sort === randomNumber ? true : false}
                />
              ))}
            </tr>

            <tr>
              <th scope="row">4</th>
              {this.props.randomHero.talents[4].map(talent => (
                <Talent
                  key={uuidv4()}
                  talent={talent.icon}
                  randomHero={this.props.randomHero}
                  selected={talent.sort === randomNumber ? true : false}
                />
              ))}
            </tr>

            <tr>
              <th scope="row">7</th>
              {this.props.randomHero.talents[7].map(talent => (
                <Talent
                  key={uuidv4()}
                  talent={talent.icon}
                  randomHero={this.props.randomHero}
                  selected={talent.sort === randomNumber ? true : false}
                />
              ))}
            </tr>

            <tr>
              <th scope="row">10</th>
              {this.props.randomHero.talents[10].map(talent => (
                <Talent
                  key={uuidv4()}
                  talent={talent.icon}
                  randomHero={this.props.randomHero}
                />
              ))}
            </tr>

            <tr>
              <th scope="row">13</th>
              {this.props.randomHero.talents[13].map(talent => (
                <Talent
                  key={uuidv4()}
                  talent={talent.icon}
                  randomHero={this.props.randomHero}
                />
              ))}
            </tr>

            <tr>
              <th scope="row">16</th>
              {this.props.randomHero.talents[16].map(talent => (
                <Talent
                  key={uuidv4()}
                  talent={talent.icon}
                  randomHero={this.props.randomHero}
                />
              ))}
            </tr>

            <tr>
              <th scope="row">20</th>
              {this.props.randomHero.talents[20].map(talent => (
                <Talent
                  key={uuidv4()}
                  talent={talent.icon}
                  randomHero={this.props.randomHero}
                />
              ))}
            </tr> */
    );
  }
}
