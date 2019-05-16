import React, { useState } from 'react';
import axios from 'axios';

import Button from './components/Button';
import CardList from './components/CardLIst';
import Display from './components/Display';

import './App.css';

// const testData = [
//     {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
//     {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
//     {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
// ];

function App () {

  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter( counter + incrementValue );
  // constructor(props) {
  //   super();
  //   this.state = {
  //     profiles: [],
  //   };
  // }

  // addNewProfile = (profileData) => {
  //   console.log('App -> ', profileData);
  //   this.setState( prevState => ({
  //     profiles: [...prevState.profiles, profileData ]
  //   }));
  // }

  //  render() {
    return (
        <div>
          {/* <div className="header">{this.props.title}</div>
          <Form onSubmit={ this.addNewProfile } /> */}
          <p></p>
          <Button onClickFunction={ incrementCounter } increment={ 1 } />
          <Button onClickFunction={ incrementCounter } increment={ 5 } />
          <Button onClickFunction={ incrementCounter } increment={ 10 } />
          <Button onClickFunction={ incrementCounter } increment={ 100 } />
          <hr />
          <Display message={ counter }/>
          {/* <CardList profiles={ this.state.profiles } /> */}
        </div>
      );
  //  }
}

export default App;