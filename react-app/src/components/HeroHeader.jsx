import React, { Component } from "react";

export default class HeroHeader extends Component {
  formatText = hero => {
    // const formattedName = hero
    //   .replace(/[^a-zA-Z ]/g, "")
    //   .replace(/\s+/g, "-")
    //   .toLowerCase();
    const url =
      "https://heroespatchnotes.github.io/heroes-talents/images/heroes/";
    return `${url}${hero.icon}`;
  };

  render() {
    return (
      <div>
        <img src={this.formatText(this.props.randomHero)} alt="" />
        <h2>{this.props.randomHero.name}</h2>
      </div>
    );
  }
}
