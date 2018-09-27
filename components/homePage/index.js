import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import Body from 'GoFootball/components/shared/body';
import DayCard from 'GoFootball/components/homePage/dayCard';

type Props = {};
export default class HomePage extends Component<Props> {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Body>
        <DayCard/>
        <DayCard/>
      </Body>   
    );
  }
}
