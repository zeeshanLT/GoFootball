import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import Body from 'GoFootball/components/shared/body';
import GameStatsPage from 'GoFootball/components/gamePage/gameStatsPage';
import GameResult from 'GoFootball/components/gamePage/gameResult';

type Props = {};

export default class GamePage extends Component<Props> {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.props.navigation.setParams({title: this.props.navigation.getParam('data').competitionName})
  }
  render() {
    return (
      <Body>
        <GameResult data={this.props.navigation.getParam('data')}/>
        <GameStatsPage data={this.props.navigation.getParam('data')} navigation={this.props.navigation}/>
      </Body>   
    );
  }
}
