import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Php", xp: 1.8 },
      { id: 2, value: "Html", xp: 2 },
      { id: 3, value: "Css", xp: 1.7 },
      { id: 4, value: "Javascript", xp: 1.3 },
      { id: 5, value: "Python", xp: 0.7 },
    ],
    frameworks: [
      { id: 1, value: "Symfony", xp: 1.5 },
      { id: 2, value: "Boostrap", xp: 1.8 },
      { id: 3, value: "Sass", xp: 0.7 },
      { id: 4, value: "React", xp: 0.3 },
      { id: 5, value: "Laravel", xp: 0.2 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="Languages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="Frameworks & Bibliothèques"
        />
      </div>
    );
  }
}

export default Languages;
