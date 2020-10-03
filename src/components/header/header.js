import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";
class header extends Component {
  render() {
    return (
      <header>
        <nav
          class="navbar navbar-light navbar-expand-md"
          style={{
            fontFamily: "Kumbh Sans",
            fontWeight: "bold",
            fontSize: "18px"
          }}
        >
          <div class="container-fluid">
            <a
              class="navbar-brand"
              href="#"
              style={{
                background:
                  "url(./satriaana-logo.png) center / cover no-repeat",
                color: "rgba(0,0,0,0)",
                width: "150px",
                height: "80px"
              }}
            >
              Satriaana
            </a>
            <button
              data-toggle="collapse"
              class="navbar-toggler"
              data-target="#navcol-1"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse d-md-flex d-lg-flex justify-content-md-end justify-content-lg-end"
              id="navcol-1"
            >
              <ul class="nav navbar-nav">
                <Link to="/">
                  {" "}
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Home
                    </a>
                  </li>
                </Link>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Forum
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <Link to="/about">
                  <li class="nav-item">
                    <a class="nav-link">About</a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default header;
