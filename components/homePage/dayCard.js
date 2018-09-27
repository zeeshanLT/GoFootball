import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import DateTitle from 'GoFootball/components/homePage/dateTitle';
import LeagueTitle from 'GoFootball/components/homePage/leagueTitle';
import GamesContainer from 'GoFootball/components/homePage/gamesContainer';

type Props = {};
export default class DayCard extends Component<Props> {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <DateTitle title="Today"/>
        <LeagueTitle title="Premier League"/>
        <GamesContainer/>
      </View> 

    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 8,
  }
});