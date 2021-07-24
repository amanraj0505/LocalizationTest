/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import {strings} from './localization';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(strings.lang);
  }
  render() {
    return (
      <React.Fragment>
        <View>
          <Text>{strings.lang}</Text>
        </View>
      </React.Fragment>
    );
  }
}
export default App;
