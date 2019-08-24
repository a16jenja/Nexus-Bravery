import React, { Component } from "react";

export default class Hero extends Component {
  state = {
    selected: true
  };

  formatText = hero => {
    // const formattedName = hero
    //   .replace(/[^a-zA-Z ]/g, "")
    //   .replace(/\s+/g, "-")
    //   .toLowerCase();
    const url =
      "https://heroespatchnotes.github.io/heroes-talents/images/heroes/";
    return `${url}${hero.icon}`;
  };

  changeOpacity() {
    this.setState({ selected: !this.state.selected });
  }

  render() {
    let img_class = this.state.selected ? "1" : "0.5";
    return (
      <img
        src={this.formatText(this.props.hero)}
        alt=""
        height="60px"
        style={{ margin: "0.1em", cursor: "pointer", opacity: img_class }}
        onClick={() => {
          this.props.onHeroSelect(this.props.hero, this.state.selected);
          this.changeOpacity();
        }}
      />
    );
  }
}
