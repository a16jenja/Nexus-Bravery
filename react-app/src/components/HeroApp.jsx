import React, { Component } from "react";
import HeroList from "./HeroList";
import TalentTable from "./TalentTable";
import uuid from "uuid";
import HeroHeader from "./HeroHeader";

export default class HeroApp extends Component {
  state = {
    heroes: [],
    randomHero: "",
    randomHeroTalents: [{ talent: "test", selected: false }],
    tiers: [1, 4, 7, 10, 13, 16, 20],
    selected: ""
  };

  componentDidMount() {
    fetch("https://hotsapi.net/api/v1/heroes")
      .then(res => res.json())
      .then(result => {
        this.setState({ heroes: result });
      });
  }

  // Function for getting random talents
  handleRandomButton = e => {
    e.preventDefault();
    const randomNumber = Math.floor(
      Math.random() * this.state.heroes.length + 1
    );
    const randomHero = this.state.heroes[randomNumber];

    this.setState({
      randomHero: randomHero.name
    });
  };

  render() {
    const { level, talent, selected } = this.state;
    const values = { level, talent, selected };
    return (
      <React.Fragment>
        <div className="wrapper">
          <div className="header p-3 mb-2 bg-dark">
            <h1 className="text-center text-light">HOTS Bravery</h1>
          </div>

          <div className="header">
            <HeroHeader randomHero={this.state.randomHero} />
          </div>

          <div className="row justify-content-center">
            <TalentTable
              heroes={this.state.heroes}
              onRandomButton={this.handleRandomButton}
              randomHero={this.state.randomHero}
              selected={this.state.selected}
              isSelected={this.isSelected}
              randomHeroTalents={this.randomHeroTalents}
            />
          </div>

          <div className="container">
            <HeroList heroes={this.state.heroes} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
