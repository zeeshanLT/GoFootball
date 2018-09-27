import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';

type Props = {};
export default class AGameStat extends Component<Props> {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.text}>
        	{this.props.data.teamA}
        </Text>
        <View style={styles.score}>
	        <Text style={styles.scoreText}>
	        	{this.props.data.scoreA}:{this.props.data.scoreB}
	        </Text>
	    </View>
        <Text style={styles.text}>
        	{this.props.data.teamB}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  	flexDirection: 'row',
  	justifyContent: 'space-between',
  	paddingTop: 8,
  	paddingBottom: 8,
  	marginTop:3,
  	marginBottom: 3 
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
  	backgroundColor: '#eee',
  	fontSize: 16,
  	color: '#000',
  }
});