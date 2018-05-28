import React, {Component} from 'react';
import './Movies.sass'

class Movies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOn: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      isModalOn: !prevState.isModalOn
    }))
  }

  render() {
    let modalActive = this.state.isModalOn
      ? 'is-active'
      : ''

    return (<div>
      <section className="section">
        <div className="container">
          <div className="columns">

            <div onClick={this.handleClick} className="column is-3">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="https://img.youtube.com/vi/5zGqN1ZOEJQ/0.jpg" alt="Youtube thumbnail"/>
                  </figure>
                </div>

                <div className="card-content">
                  <h3>
                    <strong>Nonfunctional harmony in Chrono Trigger's OST</strong>
                  </h3>

                  <div className="content">
                    <p>A video about nonfunctional harmonies featuring one of the greatest soundtracks ever composed</p>

                  </div>
                </div>
              </div>
            </div>

            <div className="column is-3">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="https://img.youtube.com/vi/5zGqN1ZOEJQ/0.jpg" alt="Youtube thumbnail"/>
                  </figure>
                </div>

                <div className="card-content">
                  <h3>
                    <strong>Nonfunctional harmony in Chrono Trigger's OST</strong>
                  </h3>

                  <div className="content">
                    <p>A video about nonfunctional harmonies featuring one of the greatest soundtracks ever composed</p>

                  </div>
                </div>
              </div>
            </div>

            <div className="column is-3">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="https://img.youtube.com/vi/5zGqN1ZOEJQ/0.jpg" alt="Youtube thumbnail"/>
                  </figure>
                </div>

                <div className="card-content">
                  <h3>
                    <strong>Nonfunctional harmony in Chrono Trigger's OST</strong>
                  </h3>

                  <div className="content">
                    <p>A video about nonfunctional harmonies featuring one of the greatest soundtracks ever composed</p>

                  </div>
                </div>
              </div>
            </div>

            <div className="column is-3">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="https://img.youtube.com/vi/5zGqN1ZOEJQ/0.jpg" alt="Youtube thumbnail"/>
                  </figure>
                </div>

                <div className="card-content">
                  <h3>
                    <strong>Nonfunctional harmony in Chrono Trigger's OST</strong>
                  </h3>

                  <div className="content">
                    <p>A video about nonfunctional harmonies featuring one of the greatest soundtracks ever composed</p>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className={'modal ' + modalActive}>
        <div onClick={this.handleClick} className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            {/* TODO: dynamically put in the title and description of the video */}
            <p className="modal-card-title">Chrono</p>
            <button onClick={this.handleClick} className="delete"></button>
          </header>

          <div className="modal-card-body">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5zGqN1ZOEJQ" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            {/* TODO: dynamically render video description */}
            <p>Video description here</p>
          </div>
        </div>
      </div>

    </div>);
  }
}

export default Movies;
