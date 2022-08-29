//Just import it into App.js

import React,{useEffect} from 'react';
//import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';

//import FacebookPost from './src/Screens/FacebookPost'
//import RestartAndReset from './src/Screens/RestartAndReset'
//import MainPage from './src/Screens/DeviceInfo/MainPage'
import GetHeightWidth from './src/Screens/GetHeightWidth'
const App = () => {
 
  return (
    <GetHeightWidth/>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  btnStyle:{
    width:'60%',
    height:'7%',
    borderRadius:12,
    backgroundColor:'pink',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center'
  }
 
});

export default App;



