import React, { Component } from "react";
import Hero from "./Hero";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class HeroList extends Component {
  render() {
    return (
      <div className="container col-12">
        <DropdownButton title="Selection" variant="info">
          <Dropdown.Item eventKey="1">Select all</Dropdown.Item>
          <Dropdown.Item eventKey="2">Deselect all</Dropdown.Item>
        </DropdownButton>
        <div className="row">
          {this.props.heroes.map(hero => (
            <Hero
              key={hero.id}
              hero={hero}
              onHeroSelect={this.props.onHeroSelect}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default HeroList;
