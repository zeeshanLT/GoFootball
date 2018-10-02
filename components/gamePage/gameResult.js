import React, {Component} from 'react';
import {StyleSheet, View, Text,} from 'react-native';

type Props = {};

export default class GameResult extends Component<Props> {
  constructor(props){
    super(props);
  }
  render() {
    var game = this.props.data;
    return (
      <View style={styles.container} >
        <Text style={styles.text}>
          {game.teams[0].teamName.length > 16?game.teams[0].teamName.substring(0,14)+'..':game.teams[0].teamName}
        </Text>
        <View style={styles.score}>
          <Text style={styles.scoreText}>
            {game.teams[0].score+":"+game.teams[1].score}
          </Text>
        </View>
        <Text style={styles.text}>
          {game.teams[1].teamName.length > 16?game.teams[1].teamName.substring(0,14)+'..':game.teams[1].teamName}
        </Text>
      </View>
    );
  }
}
const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#eee'
  },
  score:{
    position: 'absolute',
    top:0,
    left:0,
    right: 0,
    bottom:0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scoreText:{
    textAlign: 'center',
    fontWeight: '500',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 34,
    color: '#888',
  },
  text: {
    fontSize: 16
  }
}