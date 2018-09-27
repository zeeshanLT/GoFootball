import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';

type Props = {};
export default class DateTitle extends Component<Props> {
  constructor(props){
    super(props);
  }

  render() {
  	var today = new Date();
    return (
    	<Text>
    		-
    	</Text>
    );
  }
}