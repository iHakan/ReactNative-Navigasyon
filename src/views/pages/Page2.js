import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {pageStyle} from '../../stil';

class Page2 extends React.Component {
  render() {
    return (
      <View style={pageStyle.container}>
        <Text>SAYFA 2</Text>

        <TouchableOpacity
          style={pageStyle.button}
          onPress={() => this.props.navigation.goBack()}>
          <Text>Geri Dön</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={pageStyle.button}
          onPress={() => this.props.navigation.navigate('P1')}>
          <Text>SAYFA 1 E GIT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={pageStyle.button}
          onPress={() => this.props.navigation.navigate('P3')}>
          <Text>SAYFA 3 E GIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Page2;
