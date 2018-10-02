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
            <EachGameStat key={this.props.data.id} data={{
              center: 'Total Pass',
              left: teamA.TOTAL_PASS.total,
              right: teamB.TOTAL_PASS.total,
              leftWidth: this.getPercentage(teamA.TOTAL_PASS.total,teamA.TOTAL_PASS.total,teamB.TOTAL_PASS.total),
              rightWidth: this.getPercentage(teamB.TOTAL_PASS.total,teamA.TOTAL_PASS.total,teamB.TOTAL_PASS.total),
            }}/>
            <EachGameStat key={this.props.data.id} data={{
              center: 'Accurate Pass',
              left: teamA.ACCURATE_PASS.total,
              right: teamB.ACCURATE_PASS.total,
              leftWidth: this.getPercentage(teamA.ACCURATE_PASS.total,teamB.ACCURATE_PASS.total,teamA.ACCURATE_PASS.total),
              rightWidth: this.getPercentage(teamB.ACCURATE_PASS.total,teamA.ACCURATE_PASS.total,teamB.ACCURATE_PASS.total)
            }}/>
            <EachGameStat key={this.props.data.id} data={{
              center: 'Total Cross',
              left: teamA.TOTAL_CROSS.total,
              right: teamB.TOTAL_CROSS.total,
              leftWidth: this.getPercentage(teamA.TOTAL_CROSS.total,teamA.TOTAL_CROSS.total,teamB.TOTAL_CROSS.total),
              rightWidth: this.getPercentage(teamB.TOTAL_CROSS.total,teamA.TOTAL_CROSS.total,teamB.TOTAL_CROSS.total)
            }}/>
            <EachGameStat key={this.props.data.id} data={{
              center: 'Accurate Cross',
              left: teamA.ACCURATE_CROSS.total,
              right: teamB.ACCURATE_CROSS.total,
              leftWidth: this.getPercentage(teamA.ACCURATE_CROSS.total,teamA.ACCURATE_CROSS.total,teamB.ACCURATE_CROSS.total),
              rightWidth: this.getPercentage(teamB.ACCURATE_CROSS.total,teamA.ACCURATE_CROSS.total,teamB.ACCURATE_CROSS.total)
            }}/>
            <EachGameStat key={this.props.data.id} data={{
              center: 'Interceptions',
              left: teamA.INTERCEPTION.total,
              right: teamB.INTERCEPTION.total,
              leftWidth: this.getPercentage(teamA.INTERCEPTION.total,teamA.INTERCEPTION.total,teamB.INTERCEPTION.total),
              rightWidth: this.getPercentage(teamB.INTERCEPTION.total,teamA.INTERCEPTION.total,teamB.INTERCEPTION.total)
            }}/>
            <EachGameStat key={this.props.data.id} data={{
              center: 'Clearance',
              left: teamA.TOTAL_CLEARANCE.total,
              right: teamB.TOTAL_CLEARANCE.total,
              leftWidth: this.getPercentage(teamA.TOTAL_CLEARANCE.total,teamA.TOTAL_CLEARANCE.total,teamB.TOTAL_CLEARANCE.total),
              rightWidth: this.getPercentage(teamB.TOTAL_CLEARANCE.total,teamA.TOTAL_CLEARANCE.total,teamB.TOTAL_CLEARANCE.total)
            }}/>
            <EachGameStat key={this.props.data.id} data={{
              center: 'Total Shots',
              left: teamA.TOTAL_SCORING_ATT.total,
              right: teamB.TOTAL_SCORING_ATT.total,
              leftWidth: this.getPercentage(teamA.TOTAL_SCORING_ATT.total,teamA.TOTAL_SCORING_ATT.total,teamB.TOTAL_SCORING_ATT.total),
              rightWidth: this.getPercentage(teamB.TOTAL_SCORING_ATT.total,teamA.TOTAL_SCORING_ATT.total,teamB.TOTAL_SCORING_ATT.total)
            }}/>
            <EachGameStat key={this.props.data.id} data={{
              center: 'Shots off target',
              left: teamA.SHOT_OFF_TARGET.total,
              right: teamB.SHOT_OFF_TARGET.total,
              leftWidth: this.getPercentage(teamA.SHOT_OFF_TARGET.total,teamA.SHOT_OFF_TARGET.total,teamB.SHOT_OFF_TARGET.total),
              rightWidth: this.getPercentage(teamB.SHOT_OFF_TARGET.total,teamA.SHOT_OFF_TARGET.total,teamB.SHOT_OFF_TARGET.total)
            }}/>
            <EachGameStat key={this.props.data.id} data={{
              center: 'Shots- inside the box',
              left: teamA.ATTEMPTS_IBOX.total,
              right: teamB.ATTEMPTS_IBOX.total,
              leftWidth: this.getPercentage(teamA.ATTEMPTS_IBOX.total,teamA.ATTEMPTS_IBOX.total,teamB.ATTEMPTS_IBOX.total),
              rightWidth: this.getPercentage(teamB.ATTEMPTS_IBOX.total,teamA.ATTEMPTS_IBOX.total,teamB.ATTEMPTS_IBOX.total)
            }}/>
            <EachGameStat key={this.props.data.id} data={{
              center: 'Shots- outside the box',
              left: teamA.ATTEMPTS_OBOX.total,
              right: teamB.ATTEMPTS_OBOX.total,
              leftWidth: this.getPercentage(teamA.ATTEMPTS_OBOX.total,teamA.ATTEMPTS_OBOX.total,teamB.ATTEMPTS_OBOX.total),
              rightWidth: this.getPercentage(teamB.ATTEMPTS_OBOX.total,teamA.ATTEMPTS_OBOX.total,teamB.ATTEMPTS_OBOX.total)
            }}/>
            <EachGameStat key={this.props.data.id} data={{
              center: 'Yellow Cards',
              left: teamA.TOTAL_YEL_CARD.total,
              right: teamB.TOTAL_YEL_CARD.total,
              leftWidth: this.getPercentage(teamA.TOTAL_YEL_CARD.total,teamA.TOTAL_YEL_CARD.total,teamB.TOTAL_YEL_CARD.total),
              rightWidth: this.getPercentage(teamB.TOTAL_YEL_CARD.total,teamA.TOTAL_YEL_CARD.total,teamB.TOTAL_YEL_CARD.total)
            }}/>
        </SharedCard>
      </View>
    );
  }
}