import React, { Component } from 'react';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Movies from './components/Movies/Movies'


import './App.css';

class App extends Component {

  componentDidMount() {
    document.body.classList.add('has-navbar-fixed-top')
  }

  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Movies />
      </div>
    );
  }
}

export default App;
