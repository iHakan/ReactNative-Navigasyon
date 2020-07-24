import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppContainerStyle, headerStyle, footerStyle} from '../stil';

import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page1 from './pages/Page1';

const Stack = createStackNavigator();

class AppContainer extends React.Component {
  navigasyon() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={'P1'}>
          <Stack.Screen name="P3" component={Page3} />
          <Stack.Screen name="P2" component={Page2} />
          <Stack.Screen name="P1" component={Page1} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  render() {
    return (
      <>
        <View style={headerStyle.container}>
          <Text>HEADER ALANI</Text>
        </View>

        <View style={AppContainerStyle.navContainer}>{this.navigasyon()}</View>

        <View style={footerStyle.container}>
          <Text>FOOTER ALANI</Text>
        </View>
      </>
    );
  }
}

export default AppContainer;
