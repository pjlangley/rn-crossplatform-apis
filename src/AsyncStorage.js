import React from 'react';
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const person = {
  name: 'James Garfield',
  age: 50,
  occupation: 'President of the United States',
}
const key = 'president';

class AsyncStorageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {},
    };
  }

  componentDidMount() {
    AsyncStorage.setItem(key, JSON.stringify(person))
      .then(() => console.log('Item stored'))
      .catch((err) => console.log('Error: ', err));
  }

  getPerson = () => {
    AsyncStorage.getItem(key)
      .then((res) => this.setState({ person: JSON.parse(res) }))
      .catch((err) => console.log('Error: ', err));
  }

  render() {
    const { person } = this.state;

    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          Testing AsyncStorage
        </Text>
        <TouchableHighlight onPress={this.getPerson} style={styles.button}>
          <Text>Get President</Text>
        </TouchableHighlight>
        <Text>{person.name}</Text>
        <Text>{person.age}</Text>
        <Text>{person.occupation}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    margin: 20,
  },
  button: {
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    height: 55,
    backgroundColor: '#dddddd',
  },
});

export default AsyncStorageComponent;
