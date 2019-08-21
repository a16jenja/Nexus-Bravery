import React, { Component } from "react";

export default class Talent extends Component {
  state = {
    selected: false
  };

  talentStyle = () => {
    if (this.state.selected) {
      return {
        border: "5px solid #fff"
      };
    }
  };

  isSelected = () => {
    let selected = "";
    if (Math.random() < 0.5) {
      selected = true;
    } else {
      selected = false;
    }
    this.setState({ selected: selected });
  };

  render() {
    return (
      <td styles={{ border: "3px solid #fff" }}>
        <img
          src={this.props.talent.icon_url["64x64"]}
          style={this.talentStyle()}
          height="50px"
        />
      </td>
    );
  }
}
