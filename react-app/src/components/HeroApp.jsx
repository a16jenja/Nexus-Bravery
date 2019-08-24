import React, { Component } from "react";
import HeroList from "./HeroList";
import TalentTable from "./TalentTable";
import HeroHeader from "./HeroHeader";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

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
    allDeselected: false,
    talentTiers: [1, 4, 7, 10, 13, 16, 20]
  };

  componentDidMount() {
    const url = "https://heroespatchnotes.github.io/heroes-talents/hero/";
    this.state.availableHeroes.map(hero =>
      fetch(url + hero + ".json")
        .then(res => res.json())
        .then(result => {
          var array = result;
          var pair = { isSelected: true };
          array = { ...array, ...pair };
          console.log(array);
          this.setState({
            heroes: [...this.state.heroes, array],
            selectedHeroes: [...this.state.selectedHeroes, array]
          });
        })
    );
  }

  // Function for getting random talents
  handleRandomButton = e => {
    e.preventDefault();
    let heroes = this.state.selectedHeroes;
    const randomNumber = Math.floor(Math.random() * heroes.length);
    const randomHero = heroes[randomNumber];
    this.setState({
      randomHero: randomHero,
      visibility: true
    });
    console.log(this.state.randomHero);
  };

  handleHeroSelect = (hero, e) => {
    var array = [...this.state.selectedHeroes];
    var heroIndex = array.findIndex(x => x.id === hero.id);
    if (hero.isSelected === true) {
      array.splice(heroIndex, 1);
      console.log("if");
      console.log(hero.isSelected);
      hero.isSelected = !hero.isSelected;
    } else {
      var heroIndex = this.state.heroes.findIndex(x => x.id === hero.id);
      array.push(this.state.heroes[heroIndex]);
      array[array.length - 1].isSelected = false;
      console.log("else");
      console.log(hero.isSelected);
      hero.isSelected = !hero.isSelected;
    }
    this.setState({
      selectedHeroes: [...array]
    });
  };

  handleDeselectAll = () => {
    let array = this.state.heroes;
    array.map(hero => {
      hero.isSelected = false;
    });
    this.setState({
      heroes: array,
      selectedHeroes: []
    });
  };

  handleSelectAll = () => {
    let array = this.state.heroes;
    array.map(hero => {
      hero.isSelected = true;
    });
    this.setState({
      heroes: array,
      selectedHeroes: this.state.heroes
    });
  };

  // handleChangeOpacity = hero1 => {
  //   let selectedHeroes = this.state.selectedHeroes;
  //   selectedHeroes.map(hero => {
  //     if (hero.id === hero1.id) {
  //       hero.isSelected = !hero.isSelected;
  //     }
  //   });
  // };

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

          <DropdownButton title="Selection" variant="info">
            <Dropdown.Item eventKey="1" onClick={this.handleSelectAll}>
              Select all
            </Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={this.handleDeselectAll}>
              Deselect all
            </Dropdown.Item>
          </DropdownButton>

          <div className="container">
            <HeroList
              heroes={this.state.heroes}
              selectedHeroes={this.state.selectedHeroes}
              onHeroSelect={this.handleHeroSelect}
              onHeroSelect2={this.handleChangeOpacity}
              allDeselected={this.state.allDeselected}
            />
          </div>
        </div>
      </div>
    );
  }
}
