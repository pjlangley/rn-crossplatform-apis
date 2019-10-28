import React from 'react';
import {
  Picker,
  View,
  StyleSheet,
} from 'react-native';

class MyPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'go',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker selectedValue={this.state.lang} onValueChange={itemValue => this.setState({ lang: itemValue })}>
          <Picker.Item label="Go" value="go" />
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="Python" value="py" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
  },
});

export default MyPicker;
