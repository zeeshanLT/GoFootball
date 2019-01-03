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
  getPercentage = (x,a,b)=>{
    return ((x/(a+b))*100)+'%';
  }
  render() {
    var teamA = this.props.data.game.teams[0].stats;
    var teamB = this.props.data.game.teams[1].stats;
    var key = this.props.data.key;
    var leftWidth = this.getPercentage(teamA[key].total, teamB[key].total,teamA[key].total);
    var rightWidth = this.getPercentage(teamB[key].total, teamB[key].total,teamA[key].total);
    return (
	{}
      <View>
        <SharedGameStat shadedTitle={false} left={teamA[key].total} center={this.props.data.center} right={teamB[key].total}/>
        <SharedBarStat leftWidth={leftWidth} rightWidth={rightWidth}/>
      </View>
    );
  }
}
