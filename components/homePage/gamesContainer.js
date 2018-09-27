import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import AGameStat from 'GoFootball/components/homePage/aGameStat';


type Props = {};
export default class GamesContainer extends Component<Props> {
  constructor(props){
    super(props);
  }

  render() {
    // const data = [{},{}];
    const data = [{
      teamA: 'Barcelona',
      teamB: 'Chelsea',
      scoreA: 2,
      scoreB: 5,
    },
    {
      teamA: 'Real Madrid',
      teamB: 'Arsenal',
      scoreA: 3,
      scoreB: 2,
    },
    {
      teamA: 'Manchester United',
      teamB: 'Newcastle United',
      scoreA: 0,
      scoreB: 8
    }];
    return (
      <View style={styles.container} >
        <AGameStat data={data[0]}/>
        <AGameStat data={data[1]}/>
        <AGameStat data={data[2]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#fff',
    borderRadius:2,
  }
});