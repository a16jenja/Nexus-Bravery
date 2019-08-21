import React, { Component } from "react";
import Talent from "./Talent";
import uuidv4 from "uuid/v4";

export default class TalentTable extends Component {
  render() {
    const randomNumber = Math.floor(
      Math.random() * this.props.randomHero.talents[1].length + 1
    );
    console.log(randomNumber);
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Level</th>
              <th scope="col">Talent 1</th>
              <th scope="col">Talent 2</th>
              <th scope="col">Talent 3</th>
              <th scope="col">Talent 4</th>
            </tr>
          </thead>
          <tbody>
            {this.props.randomHero.talents.map(talent => {
              console.log(talent);
            })}

            {/* <tr>
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
            </tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}
