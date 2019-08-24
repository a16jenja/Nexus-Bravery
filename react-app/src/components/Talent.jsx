import React, { Component } from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

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
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip id="tooltip-top">{this.props.talent.description}</Tooltip>
        }
      >
        <img
          src={this.formatURL(this.props.talent.icon)}
          alt=""
          style={this.getStyle()}
          height="60em"
        />
      </OverlayTrigger>
    );
  }
}
