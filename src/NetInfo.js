import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";

class NetInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connectionInfo: {},
    };
  }

  componentDidMount() {
    NetInfo.fetch().then((state) => {
      console.log('Connection type: ', JSON.stringify(state, null, '  '));
      this.setState({
        connectionInfo: state,
      });
    });

    NetInfo.addEventListener((state) => {
      console.log('New connection state: ', JSON.stringify(state, null, '  '));
      this.setState({ connectionInfo: state });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontFamily: 'courier' }}>
          {JSON.stringify(this.state.connectionInfo, null, '  ')}
        </Text>
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

export default NetInfo;
