import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import SharedTitle from 'GoFootball/components/shared/sharedTitle';

type Props = {};
export default class DayCard extends Component<Props> {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <SharedTitle title={this.props.title}/>
        <View style={styles.contentBox} >
          {this.props.children}
        </View>
      </View> 

    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 8,
  },
   contentBox: {
    padding: 5,
    backgroundColor: '#fff',
    borderRadius:3,
  }
});