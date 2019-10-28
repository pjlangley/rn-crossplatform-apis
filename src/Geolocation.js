import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

class MyGeolocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalCoords: {},
      updatedCoords: {},
      id: '',
    };
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      (success) => {
        this.setState({ originalCoords: success.coords });
      },
      (error) => {
        console.log('Error getting location: ', error);
      }
    );

    let id = Geolocation.watchPosition(
      (success) => {
        this.setState({
          id,
          updatedCoords: success.coords,
        });
      },
      (error) => {
        console.log('Error updating location: ', error);
      }
    );
  }

  clearWatch = () => {
    Geolocation.clearWatch(this.state.id);
  }

  render() {
    const { originalCoords, updatedCoords } = this.state;

    return (
      <View style={styles.container}>
        <Text>Original Coordinates</Text>
        <Text>Latitude: {originalCoords.latitude}</Text>
        <Text>Longitude: {originalCoords.longitude}</Text>

        <Text>Updated Coordinates</Text>
        <Text>Latitude: {updatedCoords.latitude}</Text>
        <Text>Longitude: {updatedCoords.longitude}</Text>
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

export default MyGeolocation;
