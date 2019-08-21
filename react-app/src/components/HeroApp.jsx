import React, { Component } from "react";
import HeroList from "./HeroList";
import TalentTable from "./TalentTable";
import HeroHeader from "./HeroHeader";
import XMLHttpRequest from "xmlhttprequest";

export default class HeroApp extends Component {
  state = {
    availableHeroes: [
      // "abathur",
      // "alarak",
      // "alexstrasza",
      // "anubarak",
      // "artanis",
      // "arthas",
      // "auriel",
      // "azmodan",
      // "blaze",
      // "brightwing",
      // "thebutcher",
      // "cassia",
      // "chen",
      // "chogall",
      // "chromie",
      // "deckard",
      // "dehaka",
      // "diablo",
      // "dva",
      // "falstad",
      // "fenix",
      // "gall",
      // "garrosh",
      // "gazlowe",
      // "genji",
      // "greymane",
      // "guldan",
      // "hanzo",
      // "illidan",
      // "imperius",
      // "jaina",
      // "johanna",
      // "junkrat",
      // "kaelthas",
      // "kelthuzad",
      // "kerrigan",
      // "kharazim",
      // "leoric",
      // "lili",
      // "liming",
      // "thelostvikings",
      // "ltmorales",
      // "lucio"
    ],
    heroes: [],
    randomHero: "",
    visibility: false,
    talentTiers: [1, 4, 7, 10, 13, 16, 20]
  };

  getData = () => {
    async function getUser() {
      try {
        const response = await axios.get("/user?ID=12345");
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  };

  componentDidMount() {
    const axios = require("axios");
    var array = [];
    this.setState({ availableHeroes: array });
  }
  // let array = [];
  // let array2 = [];
  // var promise = new Promise(function(resolve, reject){
  // fetch(
  //   "https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/raw/json/herodata_75589_enus.json"
  // )
  //   promise.then(res => res.json())
  //   promise.then(result => {
  //     // result.map(hero => {
  //     //   array.push(hero.name.toLowerCase());
  //     // });

  //     Object.keys(result).forEach(key => {
  //       array.push(result[key].hyperlinkId.toLowerCase());
  //     });
  //     this.setState({
  //       availableHeroes: array
  //     });
  //   });
  // })
  // fetch(url + `${hero}.json`)
  //   .then(res => res.json())
  //   .then(result => {
  //     console.log(hero);
  //     array2.push(result);
  //   });

  // this.setState({
  //   heroes: this.state.heroes.filter(hero => {
  //     return true;
  //   })
  // });

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
    console.log(this.state.randomHero);
  };

  render() {
    return (
      <div className="parent">
        <div className="header p-3 mb-2 bg-dark">
          <h1 className="text-center text-light">HOTS Bravery</h1>
        </div>

        <div className="container">
          <div className="heroHeader header">
            <HeroHeader randomHero={this.state.randomHero} />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleRandomButton}
          >
            Roll
          </button>

          {this.state.visibility && (
            <div className="row justify-content-center">
              <TalentTable
                heroes={this.state.heroes}
                randomHero={this.state.randomHero}
                style={this.getTalentTableStyle()}
                talentTiers={this.state.talentTiers}
              />
            </div>
          )}
          <div className="container">
            <HeroList heroes={this.state.heroes} />
          </div>
        </div>
      </div>
    );
  }
}
