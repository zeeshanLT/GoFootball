import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import SharedGameStat from 'GoFootball/components/shared/sharedGameStat';
import _ from 'lodash';

type Props = {};
export default class GamesContainer extends Component<Props> {
  constructor(props){
    super(props);
  }

  render() {
    var league = this.props.league;
    var eachGame = [];
    if(league.length>0){
      var left,right,center;
      eachGame = _.map(league, game=>{
        left = game.teams[0].teamName != null? game.teams[0].teamName.length > 16?game.teams[0].teamName.substring(0,14)+'..':game.teams[0].teamName:'' ;
        right = game.teams[1].teamName != null? game.teams[1].teamName.length > 16?game.teams[1].teamName.substring(0,14)+'..':game.teams[1].teamName:'' ;
        return (
          <TouchableOpacity key = {game.id} onPress={()=>{
            if(game.matchState == 'ENDED'){
              this.props.navigation.navigate('GamePage',{
                data: game
              });
            }
          }}>
            <SharedGameStat
              game={game}
              left={left}
              right={right}
              center={game.matchState == 'ENDED'?game.teams[0].score+":"+game.teams[1].score:game.date.substring(11,16)}
              shadedTitle={true}
            />
          </TouchableOpacity>
        );
      });
    }
    return (
      <View style ={styles.container}>
        {eachGame}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  // container:{
  //   backgroundColor: '#00e5ff'
  // }
})
