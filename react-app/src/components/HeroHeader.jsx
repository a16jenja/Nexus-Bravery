import React, { Component } from "react";

export default class HeroHeader extends Component {
  formatText = hero => {
    const formattedName = hero
      .replace(/[^a-zA-Z ]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();
    const url =
      "https://static.heroesofthestorm.com/gd/3a87a62680f43b26f7dd3d203b77e8cd/heroes/";
    return `${url}${formattedName}/circleIcon.png`;
  };

  render() {
    console.log(
      "https://static.heroesofthestorm.com/gd/3a87a62680f43b26f7dd3d203b77e8cd/heroes/" +
        this.formatText(this.props.randomHero) +
        "/circleIcon.png"
    );
    return (
      <div>
        <img src={this.formatText(this.props.randomHero)} alt="" />
        <h2>{this.props.randomHero}</h2>
      </div>
    );
  }
}
