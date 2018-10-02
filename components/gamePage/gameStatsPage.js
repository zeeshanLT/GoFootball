import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import SharedCard from 'GoFootball/components/shared/sharedCard';
import EachGameStat from 'GoFootball/components/gamePage/eachGameStat'
type Props = {};
export default class GameStatsPage extends Component<Props> {
  constructor(props){
    super(props);
  }
  getPercentage = (x,a,b)=>{
    return ((x/(a+b))*100)+'%';
  }
  render() {
    var teamA = this.props.data.teams[0].stats;
    var teamB = this.props.data.teams[1].stats;
    return (
      <View>
        <SharedCard title="Action in detail">
            <EachGameStat key={teamA.TOTAL_PASS.id} data={{
              center: 'Total Pass',
              game: this.props.data,
              key: 'TOTAL_PASS',
            }}/>
            <EachGameStat key={teamA.ACCURATE_PASS.id} data={{
              center: 'Accurate Pass',              
              game: this.props.data,
              key: 'ACCURATE_PASS',
            }}/>
            <EachGameStat key={teamA.TOTAL_CROSS.id} data={{
              center: 'Total Cross',
              game: this.props.data,
              key: 'TOTAL_CROSS',
            }}/>
            <EachGameStat key={teamA.ACCURATE_CROSS.id} data={{
              center: 'Accurate Cross',
              game: this.props.data,
              key: 'ACCURATE_CROSS',
            }}/>
            <EachGameStat key={teamB.INTERCEPTION.id} data={{
              center: 'Interceptions',
              game: this.props.data,
              key: 'INTERCEPTION',
            }}/>
            <EachGameStat key={teamA.TOTAL_CLEARANCE.id} data={{
              center: 'Clearance',
              game: this.props.data,
              key: 'TOTAL_CLEARANCE',
            }}/>
            <EachGameStat key={teamB.TOTAL_SCORING_ATT.id} data={{
              center: 'Total Shots',
              game: this.props.data,
              key: 'TOTAL_SCORING_ATT',
            }}/>
            <EachGameStat key={teamA.SHOT_OFF_TARGET.id} data={{
              center: 'Shots off target',
              game: this.props.data,
              key: 'SHOT_OFF_TARGET',
            }}/>
            <EachGameStat key={teamA.ATTEMPTS_IBOX.id} data={{
              center: 'Shots- inside the box',
              game: this.props.data,
              key: 'ATTEMPTS_IBOX',
            }}/>
            <EachGameStat key={teamB.ATTEMPTS_OBOX.id} data={{
              center: 'Shots- outside the box',
              game: this.props.data,
              key: 'ATTEMPTS_OBOX',
            }}/>
            <EachGameStat key={teamA.TOTAL_YEL_CARD.id} data={{
              center: 'Yellow Cards',
              game: this.props.data,
              key: 'TOTAL_YEL_CARD',
            }}/>
        </SharedCard>
      </View>
    );
  }
}