import React from "react";
import { Container } from "react-bootstrap";
import "./Content.css";
class Content extends React.Component {
  render() {
    return (
      <div>
        <Container fluid="true">
          <h1>Download YTS YIFY movies: HD smallest size</h1>
          <p>
            Welcome to the official YTS.LT website. Here you will be able to
            browse and download YIFY movies in excellent 720p, 1080p and 3D
            quality, all at the smallest file size. Only here: YTS Movies
            Torrents.
          </p>
          <div className="cenTer">
            <label>
              <h4>
                <span className="fa fa-star" />
                Popular Downloads
              </h4>
            </label>
            <br />
          </div>
        </Container>
        <div className="line" />
      </div>
    );
  }
}
export default Content;
