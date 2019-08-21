import React, { Component } from "react";

export default class Talent extends Component {
  getRandomNumber = () => {
    return this.props.randomNumber === this.props.sortNumber
      ? this.getStyle()
      : null;
  };

  getStyle = () => {
    if (this.props.selected === true) {
      return {
        border: "2px solid #63AFD0",
        boxShadow: "0px 0px 12px #63AFD0"
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
      <td>
        <img
          src={this.formatURL(this.props.talent)}
          alt=""
          style={this.getStyle()}
        />
      </td>
    );
  }
}
