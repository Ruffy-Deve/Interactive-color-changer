// src/App.js
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Ruffy Deve",
        bio: "A passionate junior React developer.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Web Developer",
      },
      shows: false,
      mountedTime: 0,
    };
  }

  // Lifecycle method
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  // Clean up timer if needed
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div style={{ marginTop: "20px" }}>
            <img src={person.imgSrc} alt="Profile" style={{ width: "150px" }} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h4>{person.profession}</h4>
          </div>
        )}

        <p style={{ marginTop: "30px" }}>
          ⏱️ Time since component mounted: <strong>{mountedTime}</strong> seconds
        </p>
      </div>
    );
  }
}

export default App;

