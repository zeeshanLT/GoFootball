import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import Body from 'GoFootball/components/shared/body';
import GameStatsPage from 'GoFootball/components/gamePage/gameStatsPage';

type Props = {};

export default class GamePage extends Component<Props> {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Body>
        <GameStatsPage/>
      </Body>   
    );
  }
}
