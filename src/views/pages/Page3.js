import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {pageStyle} from '../../stil';

class Page3 extends React.Component {
  render() {
    return (
      <View style={pageStyle.container}>
        <Text>SAYFA 3</Text>

        <TouchableOpacity style={pageStyle.button}>
          <Text>Geri Dön</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={pageStyle.button}
          onPress={() => this.props.navigation.navigate('P1')}>
          <Text>SAYFA 1 E GIT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={pageStyle.button}
          onPress={() => this.props.navigation.navigate('P2')}>
          <Text>SAYFA 2 E GIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Page3;
