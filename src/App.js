import React from "react";
import Navb from "./Component/Navbar/Navbar";
import "./App.css";

import Content from "./Component/Content/Content";
import Pic from "./Component/Images/Image";
import { Container } from "react-bootstrap";
var sz = "https://img.yts.lt/assets/images/movies/shazam_2019/medium-cover.jpg";
var ps =
  "https://yts.lt/assets/images/movies/pet_sematary_2019/medium-cover.jpg";
var cm =
  "https://yts.lt/assets/images/movies/captain_marvel_2019/medium-cover.jpg";
var dm = "https://yts.lt/assets/images/movies/dumbo_2019/medium-cover.jpg";
var hp =
  "https://img.yts.lt/assets/images/movies/hollow_point_2019/medium-cover.jpg";
var by =
  "https://img.yts.lt/assets/images/movies/the_bits_of_yesterday_2018/medium-cover.jpg";
var cl = "https://img.yts.lt/assets/images/movies/ctrl_2018/medium-cover.jpg";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          name: "Shazam",
          Year: 2019,
          src: sz,
          value: "8 / 10"
        },
        {
          id: 2,
          name: "Pet Sematary",
          Year: 2019,
          src: ps,
          value: "7 / 10"
        },
        {
          id: 3,
          name: "Captain Marvel",
          Year: 2019,
          src: cm,
          value: "7.5 / 10"
        },
        {
          id: 4,
          name: "Dumbo",
          Year: 2019,
          src: dm,
          value: "6.8 / 10"
        },
        {
          id: 5,
          name: "Hollow Point",
          Year: 2019,
          src: hp,
          value: "7 / 10"
        },
        {
          id: 6,
          name: "Bits of yesterday",
          Year: 1997,
          src: by,
          value: "6 / 10"
        },
        {
          id: 7,
          name: "CTRL",
          Year: 2019,
          src: cl,
          value: "8 / 10"
        },

        {
          id: 8,
          name: " ",
          Year: 2019,
          src: dm,
          value: "7/ 10"
        }
      ]
    };
  }
  render() {
    const list = this.state.list.map(element => {
      return (
        <Pic
          src={element.src}
          name={element.name}
          Year={element.Year}
          value={element.value}
          key={element.id}
        />
      );
    });
    return (
      <div>
        <header className="App-header">
          <div className="bg">
            <div id="background-overlay" />
            <Navb />
            <Container fluid="true">
              <Content />
              {list}
            </Container>
          </div>
        </header>
      </div>
    );
  }
}
export default App;
