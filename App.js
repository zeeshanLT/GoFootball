import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import {createStackNavigator,} from 'react-navigation';
// import store from 'GoFootball/store';
// import HomePage from 'GoFootball/components/homePage';
// import { Provider } from 'react-redux';

const RootStack =  createStackNavigator(
  {
    Home: HomePage,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: ({navigation})=>{
      return {  
        headerTitle: navigation.getParam('title','GoFootball') ,
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#454343',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#454343'
        },
      }
    },
  }
);
type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <RootStack/>
      </Provider>
    );
  }
}