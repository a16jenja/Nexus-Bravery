import React, { Component } from "react";
import Image from "react-bootstrap/Image";

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
    let img_class = this.props.hero.isSelected ? "1" : "0.5";
    return (
      <Image
        src={this.formatText(this.props.hero)}
        alt=""
        height="60px"
        style={{
          margin: "0.1em",
          cursor: "pointer",
          opacity: img_class
        }}
        onClick={() => {
          this.props.onHeroSelect(this.props.hero);
        }}
      />
    );
  }
}
