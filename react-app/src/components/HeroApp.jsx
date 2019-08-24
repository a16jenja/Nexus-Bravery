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
      "chromie",
      "deckard",
      "dehaka",
      "diablo",
      "dva",
      "falstad",
      "fenix",
      "gall",
      "garrosh",
      "gazlowe",
      "genji",
      "greymane",
      "guldan",
      "hanzo",
      "illidan",
      "imperius",
      "jaina",
      "johanna",
      "junkrat",
      "kaelthas",
      "kelthuzad",
      "kerrigan",
      "kharazim",
      "leoric",
      "lili",
      "liming",
      "lostvikings",
      "ltmorales",
      "lucio",
      "maiev",
      "malfurion",
      "malganis",
      "malthael",
      "medivh",
      "mephisto",
      "muradin",
      "murky",
      "nazeebo",
      "nova",
      "orphea",
      "probius",
      "qhira",
      "ragnaros",
      "raynor",
      "rehgar",
      "rexxar",
      "samuro",
      "sgthammer",
      "sonya",
      "stitches",
      "stukov",
      "sylvanas",
      "tassadar",
      "thrall",
      "tracer",
      "tychus",
      "tyrael",
      "tyrande",
      "uther",
      "valeera",
      "valla",
      "varian",
      "whitemane",
      "xul",
      "yrel",
      "zagara",
      "zarya",
      "zeratul",
      "zuljin"
    ],
    heroes: [],
    selectedHeroes: [],
    randomHero: "",
    visibility: false,
    talentTiers: [1, 4, 7, 10, 13, 16, 20]
  };

  componentDidMount() {
    const url = "https://heroespatchnotes.github.io/heroes-talents/hero/";
    this.state.availableHeroes.map(hero =>
      fetch(url + hero + ".json")
        .then(res => res.json())
        .then(result => {
          this.setState({
            heroes: [...this.state.heroes, result]
          });
        })
    );
  }

  // Function for getting random talents
  handleRandomButton = e => {
    e.preventDefault();
    const heroes = this.state.heroes;
    const randomNumber = Math.floor(Math.random() * heroes.length);
    const randomHero = heroes[randomNumber];
    console.log(randomNumber);
    this.setState({
      randomHero: randomHero,
      visibility: true
    });
    console.log(this.state.randomHero);
  };

  handleHeroSelect = (hero, e) => {
    this.setState({
      selectedHeroes: [...this.state.heroes]
    });
    console.log(hero);
    this.setState({
      randomHero: hero,
      visibility: true
    });
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
                talentTiers={this.state.talentTiers}
              />
            </div>
          )}
          <div className="container">
            <HeroList
              heroes={this.state.heroes}
              onHeroSelect={this.handleHeroSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}
