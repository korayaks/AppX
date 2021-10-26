 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   FlatList
 } from 'react-native';
 class App extends React.Component{
   constructor()
   {
     super();
     this.state ={
       data:[]
     }
 
   }
   componentDidMount()
   {
     this.apiCall();
   }
   async apiCall()
   {
     let resp = await fetch('https://reactnative.dev/movies.json')
     let respJson = await resp.json()
     this.setState({data:respJson.movies})
   }
 
   render(){
     return(
       <View>
         <FlatList
         data={this.state.data}
         renderItem={({item})=>
         <Text style={{fontSize:30,margin:15}}>{item.title},{item.releaseYear}</Text>
       }
         />
       </View>
     )
   }
 }
 
 export default App;
 