import React, {Component} from 'react';
import './Movies.sass'
import Movie from '../Movie/Movie'

class Movies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOn: false,
      movies: [
        {id: 1, src: 'https://www.youtube.com/embed/LI7Wcl5y5Qs', title: 'Aeris\'s Theme', description: 'A violin & piano cover by Taylor Davis & Lara de Wit', thumbnail: 'https://img.youtube.com/vi/LI7Wcl5y5Qs/0.jpg'},
        {id: 2, src: 'https://www.youtube.com/embed/6L0TnBLugTQ', title: 'Wind Scene (600 A.D.)', description: 'A guitar cover by Sam Griffin', thumbnail: 'https://img.youtube.com/vi/6L0TnBLugTQ/0.jpg'},
        {id: 3, src: 'https://www.youtube.com/embed/cRjQCvfcXn0', title: 'Woodstock', description: 'A haunting song by Joni Mitchell', thumbnail: 'https://img.youtube.com/vi/cRjQCvfcXn0/0.jpg'},
        {id: 4, src: 'https://www.youtube.com/embed/An2a1_Do_fc', title: 'Old Man', description: 'Neil Young\'s first performance of this song', thumbnail: 'https://img.youtube.com/vi/An2a1_Do_fc/0.jpg'}
      ],
      currentMovieTitle: null,
      currentMovieDescription: null,
      currentMovieSrc: null
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(title, description, src) {
    this.setState(prevState => ({
      isModalOn: !prevState.isModalOn,
      currentMovieTitle: title,
      currentMovieDescription: description,
      currentMovieSrc: src
    }),
      // A callback function that performs once setState completes
      // ensures the video stops when the modal is closed
      this.stopPlayer
    )
  }

  // Modifies iframe document's body to stop the video
  stopPlayer() {
    	document.getElementById("moviePlayer")
        .contentWindow
        .postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*')
      }

  render() {
    let modalActive = this.state.isModalOn
      ? 'is-active'
      : ''

    let modalFadeOut = this.state.isModalOn ? '' : 'animated fadeOutRight'

    return (<div>
      <section className="section">
        <div className="container">
          <div className="columns">

            {this.state.movies.map((movie) => {
              return (
                <Movie key={movie.id} title={movie.title}
                  description={movie.description}
                  thumbnail={movie.thumbnail}
                  src={movie.src}
                  onClick={() => this.handleClick(movie.title, movie.description, movie.src)} />
              )
            })}

          </div>
        </div>
      </section>

      <div className={'modal ' + modalActive}>
        <div onClick={this.handleClick} className={'modal-background ' + modalFadeOut}></div>
        <div className="modal-card animated fadeInRight">
          <header className="modal-card-head">
            <p className="modal-card-title">{this.state.isModalOn ? this.state.currentMovieTitle : null}</p>
            <button onClick={this.handleClick} className="delete"></button>
          </header>

          <div className="modal-card-body">
            <iframe id="moviePlayer" title={this.state.currentMovieTitle} width="560" height="315" src={this.state.currentMovieSrc} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p>{this.state.isModalOn ? this.state.currentMovieDescription : null}</p>
          </div>
        </div>
      </div>

    </div>);
  }
}

export default Movies;
