import React, { Component } from "react";
import HeroList from "./HeroList";
import TalentTable from "./TalentTable";
import HeroHeader from "./HeroHeader";

export default class HeroApp extends Component {
  state = {
    availableHeroes: [
      "abathur",
      "alarak",
      "alexstrasza",
      "anubarak",
      "artanis",
      "arthas",
      "auriel",
      "azmodan",
      "blaze",
      "brightwing",
      "thebutcher",
      "cassia",
      "chen",
      "chogall",
      "chromie"
    ],
    heroes: [],
    heroesNameID: [],
    randomHero: "",
    visibility: false
  };

  getTalentTableStyle = () => {
    return {
      display: this.state.visibility ? "none" : "table"
    };
  };

  componentDidMount() {
    const url = "https://heroespatchnotes.github.io/heroes-talents/hero/";
    this.state.availableHeroes.map(hero =>
      fetch(url + `${hero}.json`)
        .then(res => res.json())
        .then(result => {
          this.setState({ heroes: this.state.heroes.concat(result) });
        })
    );

    // fetch(
    //   "https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/raw/json/herodata_75589_enus.json"
    // )
    //   .then(res => res.json())
    //   .then(result => {
    //     this.setState({
    //       heroesNameID: this.convertToArray(result)
    //     });
    //   });

    // this.state.heroes.map(hero =>
    //   fetch(
    //     "https://heroespatchnotes.github.io/heroes-talents/hero/"`${
    //       hero.short_name
    //     }.json`
    //   )
    //     .then(res => res.json())
    //     .then(result => {
    //       console.log(hero);
    //       this.setState({
    //         heroesTest: this.state.heroesTest.concat(result)
    //       });
    //     })
    // );
  }

  convertToArray = result => {
    let array = [];
    for (var key in result) {
      array.push(key);
    }
    return array;
  };

  // Function for getting random talents
  handleRandomButton = e => {
    const heroes = this.state.heroes;
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * heroes.length + 1);
    const randomHero = heroes[randomNumber];

    this.setState({
      randomHero: randomHero,
      visibility: true
    });
  };

  // Function for looping through the heroes available
  loopThroughHeroes = (heroes, value1) => {
    let array = [];
    for (var key in heroes) {
      // skip loop if the property is from prototype
      if (!heroes.hasOwnProperty(key)) continue;

      var obj = heroes[key];
      for (var prop in obj) {
        // skip loop if the property is from prototype
        if (!obj.hasOwnProperty(prop)) continue;
        // your code
        if (prop === value1) {
          array.push(obj[prop].heroSelect);
        }
      }
    }
    return array;
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <div className="header p-3 mb-2 bg-dark">
            <h1 className="text-center text-light">HOTS Bravery</h1>
          </div>

          <div className="header">
            <HeroHeader randomHero={this.state.randomHero} />
          </div>

          {this.state.visibility && (
            <div className="talentTable row justify-content-center">
              <TalentTable
                heroes={this.state.heroes}
                randomHero={this.state.randomHero}
                style={this.getTalentTableStyle()}
              />
            </div>
          )}
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleRandomButton}
          >
            Start
          </button>
          <div className="container">
            <HeroList heroes={this.state.heroes} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
