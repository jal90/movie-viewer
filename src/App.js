import React, { Component } from 'react';
import Header from './components/Header/Header'
import './App.css';

class App extends Component {

  componentDidMount() {
    document.body.classList.add('has-navbar-fixed-top')
  }

  render() {
    return (
    <Header />
    );
  }
}

export default App;
