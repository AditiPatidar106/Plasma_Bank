import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div>
            <ul>
              <li>
                <strong>
                  <span>
                    <Link to="/">PLASMA BANK</Link>
                  </span>
                </strong>
              </li>

              <li>
                <Link to="/">HOME</Link>
              </li>

              <li>
                <Link to="/How_it_works">HOW IT WORKS</Link>
              </li>

              <li>
                <Link to="/Doubt">DOUBTS</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
      </div>
    );
  }
}
export default Header;
