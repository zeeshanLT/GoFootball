import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';

type Props = {};
export default class LeagueTitle extends Component<Props> {
  constructor(props){
    super(props);
  }

  render() {
  	var today = new Date();
    return (
    	<Text style={styles.title}>
    		{this.props.title}
    	</Text>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    marginBottom: 5,
    padding: 5,
  }
});