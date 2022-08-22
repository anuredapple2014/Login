import React,{useEffect} from 'react';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';





const App = () => {
  useEffect(()=>{
  GoogleSignin.configure()
  },[])

  const GoogleLogIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("user info",userInfo)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(error)
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error)
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error)
        // play services not available or outdated
      } else {
        console.log(error)
        // some other error happened
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
   <TouchableOpacity 
   onPress={GoogleLogIn}
   style={{width:'60%',height:'7%',borderRadius:12,backgroundColor:'pink',alignSelf:'center',alignItems:'center',justifyContent:'center'}}>
    <Text>Google Login</Text>
   </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
 
});

export default App;

