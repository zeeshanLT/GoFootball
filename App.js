import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import {createStackNavigator,} from 'react-navigation';
import store from 'GoFootball/store';
import HomePage from 'GoFootball/components/homePage';
import { Provider } from 'react-redux';
import GamePage from 'GoFootball/components/gamePage';

const RootStack =  createStackNavigator(
  {
    HomePage: HomePage,
    GamePage: GamePage,
  },
  {
    initialRouteName: 'HomePage',
    navigationOptions: ({navigation})=>{
      return {  
        headerTitle: navigation.getParam('title','GoFootball') ,
        headerStyle: {
          backgroundColor: '#2196f3',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#fff'
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