import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

class MyDateTimePicker extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DateTimePicker value={new Date()} />
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

export default MyDateTimePicker;
