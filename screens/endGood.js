import { StyleSheet, Text, View,Image,ImageBackground,Button,TouchableOpacity} from 'react-native';
import React from 'react';
const image1 = require('../images/success_character.png');



const EndGood = (props) => {


  
    return (

      
      <View style={styles.container}>
      <View style={{height:'80%',width:'80%'}}>
      <ImageBackground source={image1} resizeMode='contain' style={styles.image}>
      </ImageBackground>

      </View>
        <Text style={{fontWeight:'bold' , fontSize:'50px' , color:'#00FF00'}}>Victory!!</Text>
       <View style={{flex: 1,width:'100%',height:'10%',alignItems:'center',justifyContent:'center'}}>
         <TouchableOpacity onPress={() => { props.navigation.navigate('Home') }}
         style={{backgroundColor:'white',alignItems:'center',borderRadius: 13,height:50,width:200,justifyContent: 'center',}}>
           <Text style={{color:'grey',fontWeight:'bold'}}>Home Page</Text>
           </TouchableOpacity>
     </View>
    </View>
    )
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

export default EndGood