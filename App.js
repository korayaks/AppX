import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Task from './components/Task';

export default function App(){
  return (
    <View style={styles.container}>
       
      {/* Today's Tasks */}
      <View style={styles.taskWrapper}>
      <Text style={styles.sectionTitle}>Today's tasks</Text>

      <View style = {styles.items}>
        {/* This is where the tasks will go */}
        <Task text={'task1'}/>
        <Task text={'task2'}/>
      </View>

      </View>
    </View>
  )
}
 
const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
 },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop:30,
  }
})
 