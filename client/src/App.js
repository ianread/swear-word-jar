import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  state = {
    response: {
      fuck: 0,
      shit: 0,
      damn: 0,
      nigger: 0,
      other: 0,
    }
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/counts');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  callFuck = async () => {
    const response = await fetch('/api/fuck');
    const body = await response.json();
    this.callApi()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  callShit = async () => {
    const response = await fetch('/api/shit');
    const body = await response.json();
    this.callApi()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  callDamn = async () => {
    const response = await fetch('/api/damn');
    const body = await response.json();
    this.callApi()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  callNigger = async () => {
    const response = await fetch('/api/nigger');
    const body = await response.json();
    this.callApi()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  callOther = async () => {
    const response = await fetch('/api/other');
    const body = await response.json();
    this.callApi()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className="swear_word" onClick={this.callFuck.bind(this)}>
          <div className="swear_name">
            FUCK
          </div>
          <div className="swear_count">
            {this.state.response.fuck}
          </div>
        </div>
        <div className="swear_word" onClick={this.callShit.bind(this)}>
          <div className="swear_name">
            SHIT
          </div>
          <div className="swear_count">
            {this.state.response.shit}
          </div>
        </div>
        <div className="swear_word" onClick={this.callDamn.bind(this)}>
          <div className="swear_name">
            DAMN
          </div>
          <div className="swear_count">
            {this.state.response.damn}
          </div>
        </div>
        <div className="swear_word" onClick={this.callNigger.bind(this)}>
          <div className="swear_name">
            NIGGER
          </div>
          <div className="swear_count">
            {this.state.response.nigger}
          </div>
        </div>
        <div className="swear_word" onClick={this.callOther.bind(this)}>
          <div className="swear_name">
            BITCH
          </div>
          <div className="swear_count">
            {this.state.response.other}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
