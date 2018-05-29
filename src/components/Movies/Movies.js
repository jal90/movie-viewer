import React, {Component} from 'react';
import ReactModal from 'react-modal'
import './Movies.css'
import Movie from '../Movie/Movie'

class Movies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
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

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(title, description, src) {
    this.setState({
      modalIsOpen: true,
      currentMovieTitle: title,
      currentMovieDescription: description,
      currentMovieSrc: src
    });
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const modalStyles = {
      overlay: {
     position: 'fixed',
     top: 0,
     left: 0,
     right: 0,
     bottom: 0,
     backgroundColor: 'rgba(0, 0, 0, 0)'
   },
      content : {
      // top                   : '50%',
      // left                  : '50%',
      // right                 : '0',
      // bottom                : 'auto',
      // width                 : '50%',
      // marginRight           : '-50%',
      transform             : 'translate(45%, 4%)',
      // backgroundColor: 'rgba(, 0, 255, 0.75)'
      }
    }

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
                  onClick={() => this.openModal(movie.title, movie.description, movie.src)}
                />
              )
            })}

          </div>
        </div>
      </section>

      <ReactModal isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal}
                  style={modalStyles}
                  closeTimeoutMS={500}
                  >

        <div className="card">
          <div className="card-header">
            <div className="card-header-title">
              <button onClick={this.closeModal}>X</button>
              {this.state.currentMovieTitle}
            </div>
          </div>
          <div className="card-content">
            <iframe id="moviePlayer" title={this.state.currentMovieTitle} width="560" height="315" src={this.state.currentMovieSrc} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p>{this.state.currentMovieDescription}</p>
          </div>
        </div>
      </ReactModal>
    </div>);
  }
}

export default Movies;
