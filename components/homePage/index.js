import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';
import Body from 'GoFootball/components/shared/body';
import { connect } from 'react-redux';
import DayCard from 'GoFootball/components/homePage/dayCard';
import {getOneDayStat} from 'GoFootball/actions/getOneDayStat';

type Props = {};
class HomePage extends Component<Props> {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.props.navigation.setParams({title: 'GoFootball'});
    this.props.getOneDayStat('TODAY');
    this.props.getOneDayStat('YESTERDAY');
    this.props.getOneDayStat('TOMORROW');
  }
  render() {
    return (
      <Body>
        <DayCard data={this.props.yesterdayData} title="Yesterday"/>
        <DayCard data={this.props.todayData} title="Today"/>
        <DayCard data={this.props.tomorrowData} title="Tomorrow"/>
      </Body>
    );
  }
}

const mapStateToProps = (state)=>({
  todayData: state.stats.today,
  tomorrowData: state.stats.tomorrow,
  yesterdayData: state.stats.yesterday
});

export default connect(mapStateToProps,{getOneDayStat})(HomePage);