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
    this.props.getOneDayStat();
  }
  render() {
    return (
      <Body>
        <DayCard data={this.props.data} title="Today"/>
      </Body>
    );
  }
}

const mapStateToProps = (state)=>({
  data: state.stats.data
});

export default connect(mapStateToProps,{getOneDayStat})(HomePage);