import React from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window');

class MyDimensions extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Width: {width}</Text>
        <Text>Height: {height}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default MyDimensions;
