import React, { Component } from "react";

export default class Talent extends Component {
  state = {
    selected: false
  };

  getStyle = () => {
    let selected = false;
    if (this.props.talent.sort === this.props.randomNumber) {
      selected = true;
    }
    if (selected === true) {
      return {
        border: "0.3em solid #63AFD0",
        boxShadow: "0px 0px 12px #63AFD0",
        cursor: "pointer"
      };
    } else {
      return {
        cursor: "pointer"
      };
    }
  };

  formatURL = talentName => {
    const url =
      "https://heroespatchnotes.github.io/heroes-talents/images/talents/";
    return `${url}${talentName}`;
  };

  render() {
    return (
      <img
        src={this.formatURL(this.props.talent.icon)}
        alt=""
        style={this.getStyle()}
        height="60em"
        data-toggle="tooltip"
        data-placement="top"
        title={this.props.talent.description}
      />
    );
  }
}
