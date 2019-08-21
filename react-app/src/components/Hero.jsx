import React, { Component } from "react";

export default class Hero extends Component {
  formatText = hero => {
    const formattedName = hero.name
      .replace(/[^a-zA-Z ]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();
    const url =
      "https://static.heroesofthestorm.com/gd/3a87a62680f43b26f7dd3d203b77e8cd/heroes/";
    return `${url}${formattedName}/circleIcon.png`;
  };

  render() {
    return <img src={this.formatText(this.props.hero)} height="60x" />;
  }
}
