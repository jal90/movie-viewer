import React, {Component} from 'react';
import './Hero.css'

class Hero extends Component {

  render() {
    return (
      <div>
        <section className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                A Journey into New Technologies
              </h1>
              <h2 className="subtitle">
                Be amazed at my first creation with React and Bulma
              </h2>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Hero;
