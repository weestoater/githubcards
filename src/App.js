import React from "react";
import CardList from "./components/CardLIst";
import Form from "./components/Form";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      profiles: []
    };
  }

  addNewProfile = profileData => {
    console.log("App -> ", profileData);
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>{this.props.title}</h1>
          </div>
          <div className="col-sm-6 offset-sm-3">
            <Form onSubmit={this.addNewProfile} />
          </div>
        </div>
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
