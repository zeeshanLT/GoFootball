import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import SharedCard from 'GoFootball/components/shared/sharedCard';
import DateTitle from 'GoFootball/components/homePage/dateTitle';
import GamesContainer from 'GoFootball/components/homePage/gamesContainer';
import _ from 'lodash';

type Props = {};
export default class DayCard extends Component<Props> {
  constructor(props){
    super(props);
  }
  componentWillMount(){
  }
  render() {
    var data = this.props.data;
    var eachLeague = [];
    if(Object.keys(data).length>0){
      var leagues = {};
      // leagues = {'a':{'val': 4}}
      _.map(data,eachData=>{
        if(eachData.competitionName in leagues){
          leagues[eachData.competitionName].push(eachData);
        }else{
          leagues[eachData.competitionName] = [eachData];
        }
      });
      eachLeague = _.map(leagues, league=>{
        //league is an array of objects of individual matches in a particualar competition 
        return (
          <SharedCard key={league[0].id} title={league[0].competitionName}>
            <GamesContainer league= {league}/>
          </SharedCard>
        );
      });
    }
    return (
      <View style={styles.container}>
        <DateTitle title={this.props.title}/>
        {eachLeague}
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 4,
    marginTop: 8,
  }
});