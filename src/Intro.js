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
        <Step id="agenda" x={100} y={100} z={200} rotate={3}>
          <h3>Agenda</h3>

          <Card>
            <CardContent>
              <h4>Lecture 3</h4>
              <ul style={{ fontSize: 24 }}>
                <li>Comparison to other mobile frameworks</li>
                <li>
                  Differences to React as learned so far -{' '}
                  <b>native component abstractions</b>
                </li>
                <li>Common components</li>
                <li>Navigation with React Navigation</li>
                <li>Basic debugging</li>
                <li>Coding excercise 1</li>
              </ul>
            </CardContent>
          </Card>
          <Card style={{ marginTop: 32 }}>
            <CardContent>
              <h4>Lecture 4</h4>
              <ul style={{ fontSize: 24 }}>
                <li>Network requests</li>
                <li>Handling text input</li>
                <li>Styling</li>
                <li>Layout and flexbox</li>
                <li>React Native libraries</li>
                <li>Coding excercise 2</li>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step id="comparison" x={1200} y={100} z={200} rotate={-2}>
          <Card>
            <CardContent>
              <h4>Comparison to other mobile frameworks</h4>
              <ul style={{ fontSize: 24 }}>
                <li>Native code (Android, iOS)</li>
                <ul style={{ listStyle: 'none', marginTop: 0 }}>
                  <li style={{ color: 'green' }}>
                    <code>+ </code>Performance, "native feel"
                  </li>
                  <li style={{ color: 'red' }}>
                    <code>- </code>Separate codebases per platform
                  </li>
                  <li style={{ color: 'red' }}>
                    <code>- </code>Multiple platforms/languages to learn
                  </li>
                </ul>
                <li>Cordova, PhoneGap, Ionic, ...</li>
                <ul style={{ listStyle: 'none', marginTop: 0 }}>
                  <li style={{ color: 'red' }}>
                    <code>- </code>Performance
                  </li>
                  <ul style={{ marginTop: 0, marginBottom: 0 }}>
                    <li style={{ color: 'red' }}>
                      Everything runs in a WebView
                    </li>
                    <li style={{ color: 'red' }}>
                      "Native feel" as good as we can get with web elements
                    </li>
                    <li style={{ color: 'red' }}>
                      Laggy UI, choppy animations, ...
                    </li>
                  </ul>
                  <li style={{ color: 'green' }}>
                    <code>+ </code>Code sharing between platforms
                  </li>
                  <li style={{ color: 'green' }}>
                    <code>+ </code>Same language on all platforms
                  </li>
                </ul>
                <li>React Native</li>
                <ul style={{ listStyle: 'none', marginTop: 0 }}>
                  <li style={{ color: 'green' }}>
                    <code>+ </code>Performance, everything* is rendered as
                    native components!
                  </li>
                  <li style={{ color: 'green' }}>
                    <code>+ </code>Code sharing between platforms
                  </li>
                  <li style={{ color: 'green' }}>
                    <code>+ </code>Same language on all platforms
                  </li>
                </ul>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step
          id="comparison-native-components"
          x={2200}
          y={100}
          z={200}
          rotate={-1}
        >
          <Card>
            <CardContent>
              <h4>React Native uses native components</h4>
              <ul>
                <li>
                  In React Native, we control native components from JavaScript
                </li>
                <li>This ensures better user experience</li>
                <li>Instant feedback when touching buttons</li>
                <li>Smooth transitions and animations</li>
                <li>
                  Components also look the way they should on the platform TODO:
                  image of Android vs iOS button
                </li>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step id="react-differences" x={2300} y={1000} z={200} rotate={-4}>
          <Card>
            <CardContent>
              <h4>Differences to React</h4>
              <ul>
                <li>No web elements available</li>
                <li>Instead: abstractions of native components</li>
                <li>Sometimes you still need native code...</li>
                <ul style={{ marginTop: 0, fontSize: 30 }}>
                  <li>Implementing missing functionality</li>
                  <li>High performance processing</li>
                  <li>Some third party libraries ship native code</li>
                </ul>
              </ul>
            </CardContent>
          </Card>
          <Card style={{ marginTop: 32 }}>
            <CardContent>
              <h6>But there are still many similarities...</h6>
              <ul style={{ marginTop: 0, fontSize: 30 }}>
                <li>Components, state, props...</li>
                <li>Flexbox layout, styling (at least very close)</li>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step id="component-abstractions" x={2500} y={1700} z={200} rotate={-4}>
          <Card>
            <CardContent>
              <h4>Native component abstractions</h4>
              <ul style={{ marginTop: 0, fontSize: 30 }}>
                <li>
                  Native components work a little different than web components,
                  -> own abstractions
                </li>
                <ul style={{ marginTop: 0, fontSize: 30 }}>
                  <li>
                    <b>
                      <code>&lt;div&gt;</code>
                    </b>{' '}
                    becomes:{' '}
                    <b>
                      <code>&lt;View&gt;</code>
                    </b>
                  </li>
                  <li>
                    <b>
                      <code>&lt;img&gt;</code>
                    </b>{' '}
                    becomes:{' '}
                    <b>
                      <code>&lt;Image&gt;</code>
                    </b>
                  </li>
                  <li>
                    <b>
                      <code>&lt;button&gt;</code>
                    </b>{' '}
                    becomes:{' '}
                    <b>
                      <code>&lt;Button&gt;</code>
                    </b>
                  </li>
                  <li>
                    <b>
                      <code>&lt;input&gt;</code>
                    </b>{' '}
                    becomes:{' '}
                    <b>
                      <code>&lt;TextInput&gt;</code>
                    </b>
                  </li>
                  <li>
                    Text has to be wrapped in{' '}
                    <b>
                      <code>&lt;Text&gt;</code>
                    </b>
                  </li>
                  <li>etc... See all components in documentation</li>
                </ul>
                <li>
                  These in turn map to Android, iOS (and others) native
                  representations of the respective component
                </li>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step id="components-common-view" x={2300} y={2300} z={200} rotate={-2}>
          <Card>
            <CardContent>
              <h4>
                Common components:{' '}
                <b>
                  <code>&lt;View&gt;</code>
                </b>
              </h4>
              <ul>
                <li>
                  Similar to{' '}
                  <b>
                    <code>&lt;div&gt;</code>
                  </b>
                </li>

                <li>Used for layout, containing other components</li>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step
          id="components-common-button"
          x={2300}
          y={3000}
          z={200}
          rotate={-2}
        >
          <Card>
            <CardContent>
              <h4>
                Common components:{' '}
                <b>
                  <code>&lt;Button&gt;</code>
                </b>
              </h4>
              <ul>
                <li>
                  Similar to{' '}
                  <b>
                    <code>&lt;button&gt;</code>
                  </b>
                </li>

                <li>A very simple button, not much customization available</li>
                <li>
                  Pass a string as{' '}
                  <b>
                    <code>title</code>
                  </b>{' '}
                  and a function as{' '}
                  <b>
                    <code>onPress</code>
                  </b>{' '}
                  handler
                </li>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step id="components-common-text" x={2300} y={3600} z={200} rotate={-2}>
          <Card>
            <CardContent>
              <h4>
                Common components:{' '}
                <b>
                  <code>&lt;Text&gt;</code>
                </b>
              </h4>
              <ul>
                <li>Any plain text must be wrapped in this component</li>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step
          id="components-counter-example"
          x={2300}
          y={4200}
          z={200}
          rotate={-2}
        >
          <Card>
            <CardContent>
              <div style={{ textAlign: 'center', fontSize: 32 }}>
                Using these, let's create a counter <b>one last time</b>
              </div>
              <h6>(I promise!)</h6>
              TODO: code example
            </CardContent>
          </Card>
        </Step>
        <Step id="handling-text-input" x={100} y={1100} z={200} rotate={-5}>
          <Card>
            <CardContent>
              <h4>Handling text input</h4>
              <ul>
                <li>This is similar to React, we just didn't cover it yet</li>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step id="flexbox-layout" x={100} y={1800} z={200} rotate={-5}>
          <Card>
            <CardContent>
              <h4>Layout and flexbox</h4>
              <ul>
                <li>By default, React Native uses flexbox layout</li>
                <li>Works very similar to flexbox on the web</li>
                <li>Flex direction is set to "column" by default</li>
                <ul style={{ marginTop: 0, fontSize: 30 }}>
                  <li>(as phones tend to have portrait displays)</li>
                </ul>
              </ul>
            </CardContent>
          </Card>
        </Step>
      </div>
    );
  }
}

export default withStyles(styleSheet)(Intro);
