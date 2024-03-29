import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,} from 'react-native';

type Props = {};
export default class SharedGameStat extends Component<Props> {
  constructor(props){
    super(props);
  }

  render() {
    var left = this.props.left;
    var right = this.props.right;
    setBackground =()=>{
      if(this.props.shadedTitle == true){
        return {backgroundColor: '#fff'}
      }else{
        return {backgroundColor: 'transparent'}
      }
    }

    return (
      <View style={styles.container} >
        <Text style={styles.text}>
        	{left}
        </Text>
        <View style={styles.score}>
	        <Text style={{...styles.scoreText, ...setBackground()}}>
	        	{this.props.center}
	        </Text>
	      </View>
        <Text style={styles.text}>
        	{right}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
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
    color: '#888',
  }
});