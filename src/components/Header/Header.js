import React, {Component} from 'react';
// import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {isActive: false}

    // Without the following line, `this` would be undefined in the handleClick method
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    let menuActive = this.state.isActive ? 'is-active' : ''

    return (
      <div className="navbar is-fixed-top is-dark">
      <div className="navbar-brand">
        <a className="navbar-item">MovieDemo</a>
        {/* TODO: size and place this icon */}
        {/* <i className="fa fa-film"></i> */}

        <a className={'navbar-burger ' + menuActive} onClick={this.handleClick}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={'navbar-menu ' + menuActive}>
        <div className="navbar-end">
          <a target="_blank" rel="noopener noreferrer" href="https://jal90.github.io" className="navbar-item">
            Portfolio
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/jal90" className="navbar-item">
            Linkedin
          </a>
          {/* TODO: maybe make this route to a form that can send an email from the website */}
          <a target="_blank" rel="noopener noreferrer" href="mailto:adamslukowsky@gmail.com" className="navbar-item">
            Email
          </a>
        </div>
      </div>
    </div>
    )
  }
}

export default Header;
