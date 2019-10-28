import React from 'react';
import {
  Clipboard,
  View,
  TouchableHighlight,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';

class MyClipboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clipboardData: [],
    };
  }

  componentDidMount() {
    Clipboard.setString('Hello World!');
  }
  
  updateClipboard = (string) => {
    Clipboard.setString(string);
  }

  pushClipboardToArray = async () => {
    const { clipboardData } = this.state;
    const content = await Clipboard.getString();
    clipboardData.push(content);
    this.setState({ clipboardData });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          Testing Clipboard
        </Text>
        <TextInput style={styles.input} onChangeText={text => this.updateClipboard(text)} />
        <TouchableHighlight onPress={this.pushClipboardToArray} style={styles.button}>
          <Text>Click to Add to Array</Text>
        </TouchableHighlight>
        <ScrollView>
          {
            this.state.clipboardData.map((d, i) => (
              <Text key={i}>{d}</Text>
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    margin: 60,
  },
  input: {
    padding: 10,
    marginTop: 15,
    height: 60,
    backgroundColor: '#dddddd',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 15,
    backgroundColor: '#dddddd',
  },
});

export default MyClipboard;
