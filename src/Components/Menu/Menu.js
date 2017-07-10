import React, { Component } from 'react';
import './Menu.css';
import { Nav } from 'react-bootstrap';

class Menu extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-default navbar-custom navbar-fixed-top sticky bg-white shadow nav-alt">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#menubar"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">
              <img
                src={require('../../Images/logo.png')}
                className="logo"
                alt="logo"
              />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="menubar">
            <ul className="nav navbar-nav navbar-right">
              <li className="">
                <a href="#home" className="scroll">
                  Home
                </a>
              </li>
              <li className="active">
                <a href="#services" className="scroll">
                  Services
                </a>
              </li>
              <li>
                <a href="#works" className="scroll">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#team" className="scroll">
                  Team
                </a>
              </li>
              <li>
                <a href="#faqs" className="scroll">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;
