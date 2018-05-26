import React, {Component} from 'react';
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {isActive: false}

    // I've seen the following line in a few tutorials, but the official
    // React docs seem to say that this is unnecessary. Try commenting it out
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return (
      <div className="navbar has-shadow is-fixed-top is-dark">
      <div className="navbar-brand">
        <a className="navbar-item">MovieDemo</a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            About the site
          </div>
          <div className="navbar-item">
            About me
          </div>
          <div className="navbar-item">
            Letter to a friend
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Header;
