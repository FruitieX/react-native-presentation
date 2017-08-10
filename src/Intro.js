import React, { Component } from 'react';

import { PrismCode } from 'react-prism';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import Step from './Step';

import logo from './assets/logo-react-native.svg';
import './App.css';

import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('Intro', theme => ({
  title: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 32,
    lineHeight: 1.25,
    color: theme.palette.text.secondary,
  },
  codeContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  code: {
    padding: 16,
    flex: 1,
  },
}));

class Intro extends Component {
  render() {
    return (
      <div>
        <Step id="welcome" x={1100} y={800} z={2000}>
          <center>
            <div className="App-header">
              <img src={logo} className="App-logo" alt="React logo" />
              <div>Welcome to React Native!</div>
              <div>Find this presentation at:</div>
              <h6>https://haaga-helia-react-native.surge.sh</h6>
            </div>
          </center>
        </Step>
        <Step id="agenda" x={100} y={100} z={200}>
          <h3>Agenda</h3>

          <Card>
            <CardContent>
              <h4>Lecture 1</h4>
              <ul style={{ fontSize: 24 }}>
                <li>Comparison to other mobile frameworks</li>
                <li>
                  Differences to React as learned so far -{' '}
                  <b>native component abstractions</b>
                </li>
                <li>Common components</li>
                <li>Handling text input</li>
                <li>Coding excercise 1</li>
              </ul>
            </CardContent>
          </Card>
          <Card style={{ marginTop: 32 }}>
            <CardContent>
              <h4>Lecture 2</h4>
              <ul style={{ fontSize: 24 }}>
                <li>Styling</li>
                <li>Layout and flexbox</li>
                <li>React Native libraries</li>
                <li>Coding excercise 2</li>
              </ul>
            </CardContent>
          </Card>
        </Step>
      </div>
    );
  }
}

export default withStyles(styleSheet)(Intro);
