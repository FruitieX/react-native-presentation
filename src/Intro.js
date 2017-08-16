import React, { Component } from 'react';

import { PrismCode } from 'react-prism';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import {
  Handwriting,
  ExerciseContainer,
  NumberedList,
  List,
  Item,
} from './Components';

import Step from './Step';

import AndroidIcon from './assets/android.png';
import IOSIcon from './assets/ios.png';
import CordovaIcon from './assets/cordova_bot.png';
import IonicIcon from './assets/ionic-logo-blog.png';
import ReactNativeIcon from './assets/react-native.png';
import ButtonExample from './assets/buttonExample.png';

import Example1 from './assets/example-1.png';
import Example2 from './assets/example-2.png';
import Example3 from './assets/example-3.png';
import NavigationExample from './assets/nested-android.png';

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
                <li>Coding exercise 1</li>
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
                <li>Coding exercise 2</li>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step id="comparison" x={1200} y={100} z={200} rotate={-2}>
          <Card>
            <CardContent>
              <div
                style={{
                  position: 'absolute',
                  top: 120,
                  right: 90,
                  transform: 'rotate(10deg)',
                }}
              >
                <img width={80} src={AndroidIcon} />
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: 180,
                  right: 80,

                  transform: 'rotate(-14deg)',
                }}
              >
                <img width={80} src={IOSIcon} />
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: 320,
                  right: 70,

                  transform: 'rotate(4deg)',
                }}
              >
                <img width={80} src={CordovaIcon} />
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: 430,
                  right: 70,
                }}
              >
                <img width={70} src={IonicIcon} />
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: 640,
                  right: 70,
                  transform: 'rotate(-4deg)',
                }}
              >
                <img width={130} src={ReactNativeIcon} />
              </div>
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
                    <code>+ </code>Performance, "native feel" thanks to real
                    native components
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
                <li>Components look the way they should on each platform:</li>
              </ul>
              <center>
                <img src={ButtonExample} width={700} />
              </center>
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
                  <li>etc... See all components in RN documentation</li>
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
          <Card style={{ width: 920 }}>
            <CardContent>
              <h4>
                Common components:{' '}
                <b>
                  <code>&lt;View&gt;</code>
                </b>
              </h4>
              <div style={{ display: 'flex' }}>
                <div>
                  <ul>
                    <li>
                      Similar to{' '}
                      <b>
                        <code>&lt;div&gt;</code>
                      </b>
                    </li>

                    <li>Used for layout, containing other components</li>
                  </ul>
                  <PrismCode component="pre" className="language-jsx">
                    {`<View>
  <View style={{ height: 200, backgroundColor: '#a45' }} />
  <View style={{ height: 200, backgroundColor: '#5a4' }} />
  <View style={{ height: 200, backgroundColor: '#45a' }} />
</View>`}
                  </PrismCode>
                </div>
                <div style={{ padding: 16 }}>
                  <img src={Example1} height={300} />
                </div>
              </div>
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
              <PrismCode component="pre" className="language-jsx">
                {`<Button title="Press me!" onPress={this.handlePress} />`}
              </PrismCode>
              <center>
                <img src={Example2} width={300} />
              </center>
            </CardContent>
          </Card>
        </Step>
        <Step id="components-common-text" x={2300} y={3700} z={200} rotate={-2}>
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
              <PrismCode component="pre" className="language-jsx">
                {`<Text>Hello, world!</Text>`}
              </PrismCode>
              <center>
                <img src={Example3} width={500} />
              </center>
            </CardContent>
          </Card>
        </Step>
        <Step
          id="components-counter-example"
          x={2300}
          y={4400}
          z={200}
          rotate={-2}
        >
          <Card>
            <CardContent>
              <div style={{ textAlign: 'center', fontSize: 32 }}>
                Using these, let's create a counter <b>one last time</b>
              </div>
              <h6>(I promise!)</h6>
              <PrismCode component="pre" className="language-jsx">
                {`import React from 'react';
import { View, Button, Text } from 'react-native';

class Counter extends React.Component {
  state = { value: 0 };

  increment = () => this.setState({ value: this.state.value + 1 });
  decrement = () => this.setState({ value: this.state.value - 1 });

  render = () =>
    <View>
      <Text>{ this.state.value }</Text>
      <Button title="+" onPress={this.increment} />
      <Button title="-" onPress={this.decrement} />
    </View>;
}
                `}
              </PrismCode>
            </CardContent>
          </Card>
        </Step>
        <Step id="navigation-1" x={3400} y={3500} z={200} rotate={-2}>
          <Card>
            <CardContent>
              <h4>Navigation using React Navigation</h4>

              <div style={{ display: 'flex' }}>
                <ul style={{ fontSize: 28 }}>
                  <li>Almost any app needs navigation</li>
                  <li>A few solutions exist for React Native</li>
                  <li>React Navigation de-facto standard (at the moment...)</li>
                  <li>Includes support for tab/stack/drawer navigators</li>
                  <li>Can be used on the web (React) as well</li>
                  <li>Uses native animations for smooth transitions</li>
                </ul>
                <img src={NavigationExample} width={300} />
              </div>
            </CardContent>
          </Card>
        </Step>
        <Step id="navigation-2" x={3400} y={4300} z={200} rotate={-2}>
          <Card>
            <CardContent>
              <h4>Setting up React Navigation</h4>

              <ul style={{ fontSize: 28 }}>
                <li>Setting up React Navigation is very simple:</li>
                <ul style={{ marginTop: 0, fontSize: 20 }}>
                  <li>
                    <code>npm install --save react-navigation</code>
                  </li>
                </ul>
                <li>Views are just React components:</li>
                <PrismCode component="pre" className="language-jsx">
                  {`import { TabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
...
const AppNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
  ...
});`}
                </PrismCode>
                <div style={{ fontSize: 24 }}>
                  where{' '}
                  <b>
                    <code>HomeScreen </code>
                  </b>and{' '}
                  <b>
                    <code>SettingsScreen</code>
                  </b>{' '}
                  are React components.
                </div>
                <li>
                  Now if you add{' '}
                  <code>
                    <b>&lt;AppNavigator /&gt;</b>
                  </code>{' '}
                  to your App component's{' '}
                  <code>
                    <b>render()</b>
                  </code>{' '}
                  method, you will have set up your first tab navigator!
                </li>
              </ul>
            </CardContent>
          </Card>
        </Step>
        <Step id="debugging" x={4300} y={3100} z={200} rotate={-2}>
          <Card>
            <CardContent>
              <h4>Basic debugging</h4>
              <List>
                <Item>
                  <code>console.log()</code> and other messages are printed to
                  your terminal when running a create-react-native-app project
                </Item>
                <Item />
              </List>
            </CardContent>
          </Card>
        </Step>
        <Step id="navigation-exercise" x={3450} y={5200} z={300} rotate={-2}>
          <ExerciseContainer>
            <Card>
              <CardContent>
                <Handwriting>Coding exercise</Handwriting>
                <NumberedList>
                  <Item>Create the following components:</Item>
                  <PrismCode component="pre" className="language-jsx">
                    {`class FirstView extends React.Component {
  render = () =>
    <View style={
      { flex: 1, backgroundColor: '#ffa' }
    } />
}`}
                  </PrismCode>
                  <PrismCode component="pre" className="language-jsx">
                    {`class SecondView extends React.Component {
  render = () =>
    <View style={
      { flex: 1, backgroundColor: '#faf' }
    } />
}`}
                  </PrismCode>
                  <Item>Set up a TabNavigator with react-navigation</Item>
                  <Item>Insert First/SecondView as TabNavigator screens</Item>
                  <b>Extra: </b>
                  <Item>Port your React counter code to React Native</Item>
                  <Item>Insert the counter as a TabNavigator screen</Item>
                </NumberedList>
              </CardContent>
            </Card>
          </ExerciseContainer>
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
