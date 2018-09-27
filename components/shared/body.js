import React, {Component} from 'react';
import {StyleSheet, Dimensions, ScrollView, Text, View} from 'react-native';

type Props = {};
export default class Body extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          {this.props.children}
        </ScrollView>
      </View>
    );
  }
}
const win = Dimensions.get('window');
const styles = StyleSheet.create({
  scroll: {
    padding: 10,
    margin: 2,
    overflow: 'hidden',
    // height: win.height - 91,
  },
  container: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    backgroundColor: '#fff',
  }
});
