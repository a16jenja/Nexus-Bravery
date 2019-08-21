import React, { Component } from "react";
import Hero from "./Hero";

class HeroList extends Component {
  getStyle = () => {
    return {
      flexDirection: "row",
      flexWrap: "wrap"
    };
  };

  render() {
    return (
      <div className="container col-12 bg-light">
        <div className="row">
          {this.props.heroes.map(hero => (
            <Hero key={hero.id} hero={hero} styles={this.getStyle()} />
          ))}
          ;
        </div>
      </div>
    );
  }
}

export default HeroList;
