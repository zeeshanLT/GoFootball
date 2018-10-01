import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import SharedCard from 'GoFootball/components/shared/sharedCard';
import SharedGameStat from 'GoFootball/components/shared/sharedGameStat';
import SharedBarStat from 'GoFootball/components/shared/sharedBarStat';

type Props = {};

export default class EachGameStat extends Component<Props> {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View>
        <SharedGameStat left={this.props.left} right={this.props.right} center={this.props.center}/>
        <SharedBarStat/>
      </View>
    );
  }
}