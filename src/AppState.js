import React from 'react';
import {
  AppState,
  View,
  Text,
  StyleSheet,
} from 'react-native';

class AppStateComponent extends React.Component {
  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = (currentAppState) => {
    console.log('currentAppState: ', currentAppState);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Testing App State</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default AppStateComponent;
