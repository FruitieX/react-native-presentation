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
  Flex,
  Small,
  Tiny,
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
import FlexExample from './assets/flex-example.png';
import NetworkExample from './assets/network-example.png';
import ListExample from './assets/example-list.png';
import TextExample from './assets/text-example.png';

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
              <h4>Lecture 3: Intro to React Native</h4>
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
              <h4>Lecture 4: Advanced React Native</h4>
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
                <li>All components need to be imported</li>
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
                <Item>
                  For a better debugging experience, there's React Native
                  Debugger
                </Item>
                <List>
                  <Item>
                    Comes with React Inspector & Redux developer tools
                  </Item>
                  <Item>
                    Install link is under <b>Tools</b> in{' '}
                    <b>haaga-helia.surge.sh</b>
                  </Item>
                  <Item>
                    Unfortunately requires a few extra steps with
                    create-react-native-app projects:
                  </Item>
                  <List>
                    <Item>
                      <code>npm install -g react-native-debugger-open</code>
                    </Item>
                    <Item>And with the debugger open:</Item>
                    <Item>
                      <code>rndebugger-open --open --port 19001</code>
                    </Item>
                  </List>
                  <Item>
                    Now shake the phone (or ctrl+m / cmd+d), select Enable
                    Remote JS Debugging
                  </Item>
                </List>
                <Item>
                  Quick exercise: Set up and test React Native Debugger
                </Item>
              </List>
            </CardContent>
          </Card>
        </Step>
        <Step id="navigation-exercise" x={4400} y={4000} z={300} rotate={-7}>
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
                <Item>
                  Set up a <b>TabNavigator</b> with react-navigation
                </Item>
                <Item>
                  Insert <b>&lt;FirstView /&gt; </b> and{' '}
                  <b>&lt;SecondView /&gt;</b> as TabNavigator screens
                </Item>
                <b>Extra: </b>
                <Item>Port your React counter code to React Native</Item>
                <Item>Insert the counter as a TabNavigator screen</Item>
              </NumberedList>
            </CardContent>
          </Card>
        </Step>
        <Step id="extras-1" x={5400} y={4000} z={300} rotate={-40}>
          <Card>
            <CardContent>
              <Handwriting>Extras</Handwriting>
              <List>
                <Item>
                  <b>
                    <code>react-native init</code>
                  </b>
                </Item>
                <List>
                  <Item>
                    Need to install native build tools (Android Studio, Xcode)
                  </Item>
                  <Item>
                    Supports any libraries, both JavaScript and ones containing
                    native code
                  </Item>
                </List>
                <Item>
                  <b>
                    <code>create-react-native-app</code>
                  </b>
                </Item>
                <List>
                  <Item>Expo (previously Exponent)</Item>
                  <Item>Very easy setup</Item>
                  <Item>Limited set of libraries</Item>
                  <Item>
                    Some extra API:s that stock React Native doesn't have:
                  </Item>
                  <Item>
                    <a
                      style={{ color: '#37f' }}
                      href="https://docs.expo.io/versions/latest/sdk/index.html"
                    >
                      https://docs.expo.io/versions/latest/sdk/index.html
                    </a>
                  </Item>
                  <Item>Project can be "ejected" later if needed</Item>
                </List>
                <Item>
                  More React Native components:{' '}
                  <List>
                    <Item>
                      <a
                        style={{ color: '#37f' }}
                        href="https://facebook.github.io/react-native/docs"
                      >
                        https://facebook.github.io/react-native/docs
                      </a>
                    </Item>
                  </List>
                </Item>
              </List>
            </CardContent>
          </Card>
        </Step>
        <Step id="lecture-2" x={1100} y={1100} z={200} rotate={-5}>
          <Card>
            <CardContent>
              <center>
                <div className="App-header">
                  <div>Lecture 4: Advanced React Native</div>
                </div>
              </center>
              <List>
                <Item>Network requests</Item>
                <Item>Displaying data in lists</Item>
                <Item>Handling text input</Item>
                <Item>Styling</Item>
                <Item>Layout and flexbox</Item>
                <Item>React Native libraries</Item>
                <Item>Coding exercise</Item>
              </List>
            </CardContent>
          </Card>
        </Step>
        <Step id="network-requests" x={1300} y={1800} z={200} rotate={-7}>
          <Card>
            <CardContent>
              <h4>Network requests</h4>
              <List>
                <Item>React Native provides API:s familiar from the web:</Item>
                <List>
                  <Item>Fetch API</Item>
                  <Item>
                    XMLHttpRequest API (<b>XHR</b>)
                  </Item>
                  <Item>WebSocket support</Item>
                </List>
                <Item>
                  These API:s work the same way as on the web, so any JS library
                  using these should work fine
                </Item>
                <List>
                  <Item>Axios</Item>
                  <Item>SuperAgent</Item>
                  <Item>request</Item>
                  <Item>SockJS</Item>
                  <Item>etc...</Item>
                </List>
              </List>
            </CardContent>
          </Card>
        </Step>
        <Step id="network-requests-2" x={1300} y={2500} z={200} rotate={-7}>
          <Flex style={{ marginLeft: -100, alignItems: 'center' }}>
            <div style={{ width: 800 }}>
              <Card>
                <CardContent>
                  <h6>
                    Let's make a simple network request using{' '}
                    <code>fetch()</code>:
                  </h6>
                  <PrismCode component="pre" className="language-jsx">
                    {`import { Text } from 'react-native';

class GitHubAPI extends React.Component {
  state = { data: {} };

  componentDidMount() {
    fetch('https://api.github.com/search/repositories?q=react')
      .then((response) => response.json())
      .then((data) => this.setState({ data }))
  }

  render = () =>
    <Text>
      { JSON.stringify(this.state.data, 0, 2) }
    </Text>;
}
                  `}
                  </PrismCode>
                </CardContent>
              </Card>
            </div>
            <img style={{ padding: 32 }} height={500} src={NetworkExample} />
          </Flex>
        </Step>
        <Step id="data-lists" x={1100} y={3400} z={200} rotate={-5}>
          <Flex style={{ alignItems: 'center', marginLeft: -100 }}>
            <div style={{ width: 800 }}>
              <Card>
                <CardContent>
                  <div style={{ textAlign: 'center', fontSize: 24 }}>
                    Let's display GitHubAPI's results in a list:
                  </div>
                  <PrismCode component="pre" className="language-jsx">
                    {`import { View, Text, FlatList } from 'react-native';

class RepositoryList extends React.Component {
  keyExtractor = (item) => item.id;
  renderItem = ({ item }) =>
    <View style={{ padding: 16 }}>
      <Text>{ item.full_name }</Text>
      <Text>{ item.url }</Text>
    </View>;

  render = () =>
    <FlatList
      data={this.props.data.items}
      keyExtractor={this.keyExtractor}
      renderItem={this.renderItem}
    />
}

class GitHubAPI extends React.Component {
  ... // as before: initial state, API request
  render = () => <RepositoryList data={this.state.data} />;
}`}
                  </PrismCode>
                </CardContent>
              </Card>
            </div>
            <img style={{ padding: 32 }} height={500} src={ListExample} />
          </Flex>
        </Step>
        <Step id="handling-text-input" x={0} y={1100} z={200} rotate={-5}>
          <Flex style={{ alignItems: 'center', marginLeft: -100 }}>
            <div style={{ width: 800 }}>
              <Card>
                <CardContent>
                  <h4>Handling text input</h4>
                  <List>
                    <Item>
                      This is similar to React, we just didn't cover it yet:
                    </Item>
                    <PrismCode component="pre" className="language-jsx">
                      {`import { View, TextInput, Button } from 'react-native';

class MyTextForm extends React.Component {
  state = { text: '' };

  onChange = (text) => this.setState({ text });
  onSubmit = () => this.props.onSubmit(this.state.text);

  render = () =>
    <View>
      <TextInput
        onChangeText={this.onChange}
        value={this.state.text}
      />
      <Button
        onPress={this.onSubmit}
        title="Submit"
      />
    </View>;
}`}
                    </PrismCode>
                  </List>
                </CardContent>
              </Card>
            </div>
            <img style={{ padding: 32 }} height={400} src={TextExample} />
          </Flex>
        </Step>
        <Step id="styling" x={100} y={2000} z={200} rotate={-5}>
          <Card>
            <CardContent>
              <h4>Styling</h4>
              <List>
                <Item>
                  As we have seen, inline styling works similar to React
                </Item>
                <Item>
                  Recommended to use <code>StyleSheet.create()</code> for big
                  stylesheets:
                </Item>
                <PrismCode component="pre" className="language-jsx">
                  {`import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});`}
                </PrismCode>
                <PrismCode component="pre" className="language-jsx">
                  {`<Text style={styles.bigblue}> ... </Text>`}
                </PrismCode>
                <Item>
                  Using <code>StyleSheet.create()</code> has several advantages:
                </Item>
                <List style={{ marginTop: 0 }}>
                  <Item>Styles are validated at app launch</Item>
                  <Item>
                    Style objects are created once, not each time{' '}
                    <code>render()</code> runs
                  </Item>
                  <Item>Styles are sent from JS to native code only once</Item>
                </List>
              </List>
            </CardContent>
          </Card>
        </Step>
        <Step id="flexbox-layout" x={-300} y={3000} z={200} rotate={-5}>
          <div style={{ marginLeft: -100 }}>
            <Card style={{ width: 930 }}>
              <CardContent>
                <h4>Layout and flexbox</h4>
                <List>
                  <Item>
                    By default, React Native components use flexbox layout
                  </Item>
                  <Item>
                    Works very similar to flexbox on the web, exceptions:
                  </Item>
                  <List style={{ marginTop: 0 }}>
                    <Item>
                      Phones have portrait displays:{' '}
                      <code>
                        <b>flexDirection</b>
                      </code>{' '}
                      is set to <b>column</b> by default
                    </Item>
                    <Item>
                      <code>
                        <b>flex</b>
                      </code>{' '}
                      style only takes in one number:{' '}
                      <code>
                        <b>flexGrow</b>
                      </code>
                    </Item>
                    <List style={{ marginTop: 0 }}>
                      <Item>On the web we can pass a string to flex:</Item>
                      <Item>
                        <code>"flex: [flexGrow] [flexShrink] [flexBasis]"</code>
                      </Item>
                      <Item>
                        Note that we can still use all of these in React Native
                        by setting{' '}
                        <code>
                          <b>flexShrink</b>
                        </code>{' '}
                        and{' '}
                        <code>
                          <b>flexBasis</b>
                        </code>
                      </Item>
                    </List>
                  </List>
                </List>
                <Flex
                  style={{ justifyContent: 'center', alignItems: 'flex-end' }}
                >
                  <PrismCode component="pre" className="language-jsx">
                    {`import { View } from 'react-native';

class FlexBoxExample extends React.Component {
  render = () =>
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#aaf' }} />
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: '#faa' }} />
        <View style={{ flex: 1, backgroundColor: '#afa' }} />
      </View>
    </View>
}`}
                  </PrismCode>
                  <img style={{ padding: 16 }} height={300} src={FlexExample} />
                </Flex>
              </CardContent>
            </Card>
          </div>
        </Step>
        <Step id="external-libraries" x={-1200} y={2000} z={200} rotate={-5}>
          <Card>
            <CardContent>
              <h4>
                React Native libraries (complementing missing functionality)
              </h4>
              <List>
                <Item>Plenty of UI component libraries exist, such as: </Item>
                <a href="https://nativebase.io/">https://nativebase.io/</a>
                <Item>React Native Sound</Item>
                <a href="https://github.com/zmxv/react-native-sound">
                  https://github.com/zmxv/react-native-sound
                </a>
                <Item>React Native Image Picker</Item>
                <a href="https://github.com/react-community/react-native-image-picker">
                  https://github.com/react-community/react-native-image-picker
                </a>
                <Item>For more, check out: </Item>
                <a href="https://react.parts/native">
                  https://react.parts/native
                </a>
                <Item>Implementing native libraries yourself:</Item>
                <a href="https://facebook.github.io/react-native/docs/native-modules-android.html">
                  https://facebook.github.io/react-native/docs/native-modules-android.html
                </a>
                <Item>
                  Also pretty much any JavaScript library can be included from{' '}
                  <b>npm</b>
                </Item>
              </List>
            </CardContent>
          </Card>
        </Step>
        <Step id="networking-exercise" x={-1500} y={3000} z={300} rotate={-7}>
          <Flex
            style={{ width: 1000, marginLeft: -100, alignItems: 'flex-end' }}
          >
            <div style={{ flex: 3 }}>
              <Card>
                <CardContent>
                  <Handwriting>Coding exercise</Handwriting>
                  <div style={{ fontSize: 23 }}>
                    List the <b>names</b> and <b>authors</b> of GitHub
                    repositories that <b>match a search string</b> given by the
                    user.
                  </div>
                </CardContent>
              </Card>
              <Card style={{ marginTop: 16 }}>
                <CardContent>
                  <Small>
                    1. Implement a{' '}
                    <code>
                      <b>&lt;GitHubAPI&gt;</b>
                    </code>{' '}
                    component which:
                    <List style={{ marginTop: 0 }}>
                      <Item>
                        Calls{' '}
                        <code>
                          <b>fetch()</b>
                        </code>{' '}
                        in its{' '}
                        <code>
                          <b>componentDidMount()</b>
                        </code>
                      </Item>
                      <Item>Stores the result in state</Item>
                      <Item>
                        Displays current state using a{' '}
                        <code>
                          <b>&lt;Text&gt;</b>
                        </code>{' '}
                        component.
                      </Item>
                    </List>
                  </Small>
                  <Tiny style={{ paddingTop: 8 }}>
                    <b>Hint</b>: you need to call{' '}
                    <code>
                      <b>JSON.stringify(data, 0, 2)</b>
                    </code>{' '}
                    on the data when rendering it as text.
                  </Tiny>
                </CardContent>
              </Card>
            </div>
            <div style={{ flex: 5, paddingLeft: 16 }}>
              <Card>
                <CardContent>
                  <Small>
                    2. Using{' '}
                    <code>
                      <b>&lt;TextInput&gt;</b>
                    </code>, take in a string from the user and store it in{' '}
                    <code>
                      <b>&lt;GitHubAPI&gt;</b>
                    </code>
                    {"'"}s state.
                  </Small>
                </CardContent>
              </Card>
              <Card style={{ marginTop: 16 }}>
                <CardContent>
                  <Small>
                    3. Call the API endpoint again whenever the TextInput field
                    changes, with the query string in the URL set to:
                    <div style={{ textAlign: 'center' }}>
                      <b>?q=&lt;value&gt;</b>
                    </div>
                  </Small>
                </CardContent>
              </Card>
              <Card style={{ marginTop: 16 }}>
                <CardContent>
                  <Small>
                    4. Instead of displaying the results in a{' '}
                    <code>
                      <b>&lt;Text&gt;</b>
                    </code>{' '}
                    component, create a{' '}
                    <code>
                      <b>&lt;RepositoryList&gt;</b>
                    </code>{' '}
                    component which takes in a list of data as props and renders
                    the data into a{' '}
                    <code>
                      <b>&lt;FlatList&gt;</b>
                    </code>{' '}
                  </Small>
                </CardContent>
              </Card>
              <Card style={{ marginTop: 16 }}>
                <CardContent>
                  <Small>
                    <b>Extra</b>: Also display each GitHub user's avatar in the
                    list with{' '}
                    <code>
                      <b>&lt;Image&gt;</b>
                    </code>.
                  </Small>
                </CardContent>
              </Card>
            </div>
          </Flex>
          <Card style={{ marginTop: 16, width: 1000, marginLeft: -100 }}>
            <CardContent>
              <Tiny>
                The <b>API endpoint</b> is at:{' '}
                <b>
                  {'https://api.github.com/search/repositories?q=react'}
                </b>{' '}
                where <b>react</b> is an example query
              </Tiny>
            </CardContent>
          </Card>
        </Step>
      </div>
    );
  }
}

export default withStyles(styleSheet)(Intro);
