import React from 'react';
import {
  Dimensions,
  PanResponder,
  Text,
  View,
  StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window');

class MyPanResponder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oPosition: {
        x: (width / 2) - 100,
        y: (height / 2) - 100,
      },
      position: {
        x: (width / 2) - 100,
        y: (height / 2) - 100,
      },
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderRelease,
    });
  }

  handlePanResponderMove = (event, gestureState) => {
    const ydiff = gestureState.y0 - gestureState.moveY;
    const xdiff = gestureState.x0 - gestureState.moveX;

    this.setState({
      position: {
        y: this.state.oPosition.y - ydiff,
        x: this.state.oPosition.x - xdiff,
      }
    })
  }

  handlePanResponderRelease = () => {
    this.setState({
      oPosition: this.state.position,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.positionDisplay}>
          x: {this.state.position.x} / y: {this.state.position.y}
        </Text>
        <View
          {...this.panResponder.panHandlers}
          style={[styles.box, { marginLeft: this.state.position.x, marginTop: this.state.position.y }]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  positionDisplay: {
    textAlign: 'center',
    marginTop: 50,
    zIndex: 1,
    position: 'absolute',
    width,
  },
  box: {
    position: 'absolute',
    width: 200,
    height: 200,
    backgroundColor: 'red',
  }
});

export default MyPanResponder;
