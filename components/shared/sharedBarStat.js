import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';

type Props = {};

export default class SharedBarStat extends Component<Props> {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.base}>
          <View style={{...styles.stat,right: 0, width:this.props.leftWidth}}/>
        </View>
        <View style={styles.base}>
          <View style={{...styles.stat,left:0, width:this.props.rightWidth}}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 3,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  base: {
    marginLeft: 3,
    marginRight: 3,
    backgroundColor: '#eee',
    flex: 1,
    height: 5,
  },
  stat: {
    position: 'absolute',
    top: 0,
    height: '100%',
    backgroundColor: '#666',
    flex: 1,
  },
});