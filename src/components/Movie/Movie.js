import React, {Component} from 'react';
import './Movie.css'

class Movie extends Component {
  render() {
    return (
      <div onClick={() => this.props.onClick()} className="column is-3">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={this.props.thumbnail} alt="Youtube thumbnail"/>
            </figure>
          </div>
          <div className="card-content">
            <h3>
              <strong>{this.props.title}</strong>
            </h3>
            <div className="content">
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Movie;
