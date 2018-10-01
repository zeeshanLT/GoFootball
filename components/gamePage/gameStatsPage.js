import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import SharedCard from 'GoFootball/components/shared/sharedCard';
import EachGameStat from 'GoFootball/components/gamePage/eachGameStat'
type Props = {};
export default class GameStatsPage extends Component<Props> {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View>
        <SharedCard title="Distributions">
          <EachGameStat left="10%" right="20%" center="Passing Accuracy"/>
        </SharedCard>
      </View>
    );
  }
}