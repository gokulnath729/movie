import React from "react";

import "./Image.css";
import { Container, Row } from "react-bootstrap";
class Pic extends React.Component {
  render() {
    return (
      <div>
        <Container className="col-xs-6 col-sm-4 mt-5">
          <Row>
            <div className="boom">
              <div className="overlay">
                <div className="text">
                  <span className="fa fa-star" />
                  <br />
                  <div>{this.props.value}</div>
                  {this.props.name}
                </div>
              </div>
              <img src={this.props.src} alt="alt-text" className="image" />
            </div>
          </Row>
          <div className="cenTer">
            <a href="#Something">
              <h5>{this.props.name}</h5>
            </a>
            <div>{this.props.Year}</div>
          </div>
        </Container>
      </div>
    );
  }
}
export default Pic;
