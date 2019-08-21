import React, { Component } from "react";

export default class Hero extends Component {
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
      <img
        src={this.formatText(this.props.hero)}
        alt=""
        height="60px"
        style={{ margin: "0.5em" }}
      />
    );
  }
}
