import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {pageStyle} from '../../stil';

class Page2 extends React.Component {
  render() {
    return (
      <View style={pageStyle.container}>
        <Text>SAYFA 2</Text>

        <TouchableOpacity style={pageStyle.button}>
          <Text>Geri Dön</Text>
        </TouchableOpacity>
        <TouchableOpacity style={pageStyle.button}>
          <Text>SAYFA 1 E GIT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={pageStyle.button}>
          <Text>SAYFA 3 E GIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Page2;
