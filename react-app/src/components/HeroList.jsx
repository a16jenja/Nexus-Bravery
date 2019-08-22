import React, { Component } from "react";
import Hero from "./Hero";

class HeroList extends Component {
  render() {
    return (
      <div className="container col-12">
        <div className="row">
          {this.props.heroes.map(hero => (
            <Hero key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    );
  }
}

export default HeroList;
