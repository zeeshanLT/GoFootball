import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import SharedCard from 'GoFootball/components/shared/sharedCard';
import EachGameStat from 'GoFootball/components/gamePage/eachGameStat'
import _ from 'lodash';

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
    var statsKeys = [
                      ['TOTAL_PASS','Total Pass'],['ACCURATE_PASS','Accurate Pass'],['TOTAL_CROSS','Total Cross'],
                      ['INTERCEPTION','Interception'],['TOTAL_CLEARANCE','Total Clearance'],
                      ['TOTAL_SCORING_ATT','Total Shots'],['SHOT_OFF_TARGET','Shots off target'],
                      ['ATTEMPTS_IBOX','Attempts- inside the box'],['ATTEMPTS_OBOX','Attempts- outside the box'],
                      ['TOTAL_YEL_CARD','Total Yellow Cards']
                    ];
    var renderArray = _.map(statsKeys,statKey =>{
      if(teamA[statKey[0]] != undefined && teamB[statKey[0]] != undefined ){
        return (
          <EachGameStat key={teamA[statKey[0]].id} data={{
            center: statKey[1],
            game: this.props.data,
            key: statKey[0],
          }}/>
        );
      }
    });
    return (
      <View>
        <SharedCard title="Events">
            {renderArray}
        </SharedCard>
      </View>
    );
  }
}