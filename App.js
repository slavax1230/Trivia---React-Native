import { StyleSheet, Text, View,Image,ImageBackground,Button,TouchableOpacity} from 'react-native';
import React, {useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AppNav} from './navigation';


export default function App() {

  return (
      <NavigationContainer>
        <AppNav/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3fcc',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',width: '100%'
  },
  image:{
    flex: 1,
    justifyContent: "center",
    height: '100%',width: '100%'

  },
});
