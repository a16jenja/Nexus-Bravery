import React, { Component } from "react";
import Talent from "./Talent";

export default class TalentTable extends Component {
  checkIfSelected = talent => {};

  render() {
    const btnStyle = {
      padding: "1em 0"
    };

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
              <th scope="col">Talent 5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              {this.props.heroes
                .filter(hero => hero.name === this.props.randomHero)
                .map(hero =>
                  hero.talents
                    .filter(level => level.level === 1)
                    .map(talent => (
                      <Talent
                        talent={talent}
                        onRandomButton={this.props.handleRandomButton}
                        randomHero={this.props.randomHero}
                        selected={this.props.selected}
                        isSelected={this.props.isSelected}
                      />
                    ))
                )}
            </tr>

            <tr>
              <th scope="row">4</th>
              {this.props.heroes
                .filter(hero => hero.name === this.props.randomHero)
                .map(hero =>
                  hero.talents
                    .filter(level => level.level === 4)
                    .map(talent => (
                      <Talent talent={talent} selected={this.props.selected} />
                    ))
                )}
            </tr>

            <tr>
              <th scope="row">7</th>
              {this.props.heroes
                .filter(hero => hero.name === this.props.randomHero)
                .map(hero =>
                  hero.talents
                    .filter(level => level.level === 7)
                    .map(talent => <Talent talent={talent} />)
                )}
            </tr>

            <tr>
              <th scope="row">10</th>
              {this.props.heroes
                .filter(hero => hero.name === this.props.randomHero)
                .map(hero =>
                  hero.talents
                    .filter(level => level.level === 10)
                    .map(talent => <Talent talent={talent} />)
                )}
            </tr>

            <tr>
              <th scope="row">13</th>
              {this.props.heroes
                .filter(hero => hero.name === this.props.randomHero)
                .map(hero =>
                  hero.talents
                    .filter(level => level.level === 13)
                    .map(talent => <Talent talent={talent} />)
                )}
            </tr>

            <tr>
              <th scope="row">16</th>
              {this.props.heroes
                .filter(hero => hero.name === this.props.randomHero)
                .map(hero =>
                  hero.talents
                    .filter(level => level.level === 16)
                    .map(talent => <Talent talent={talent} />)
                )}
            </tr>

            <tr>
              <th scope="row">20</th>
              {this.props.heroes
                .filter(hero => hero.name === this.props.randomHero)
                .map(hero =>
                  hero.talents
                    .filter(level => level.level === 20)
                    .map(talent => <Talent talent={talent} />)
                )}
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          className="btn btn-primary"
          styles={btnStyle}
          onClick={this.props.onRandomButton}
          onChange={this.props.randomHero}
        >
          Start
        </button>
      </div>
    );
  }
}
