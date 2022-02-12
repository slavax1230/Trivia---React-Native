import React,{useState} from 'react';
import {Text,StyleSheet,View,TouchableOpacity,Image} from 'react-native';

let varnotcorrect = -1;



const Quiz1 = props => {
    return (
        <View style={style.container}>
            <Text>{props.Quiz1.id} / {props.lastQueston}</Text> 
                {
                    props.Quiz1.difficulty == 'easy' ?
                    (<Text style={{color:'#00FF00',fontWeight:'bold'}}> Level: Easy </Text>) 
                    :
                    (<Text style={{color:'#FFA500',fontWeight:'bold'}}> Level: Medium </Text>) 
                }       
            <Text style={style.title}> {props.Quiz1.title} </Text>
            {
                
                props.Quiz1.answers.map((answer,index) => (
                    <TouchableOpacity style={style.btn} key={index} onPress={() => {
                        props.onNextQuestion(props.Quiz1.id);
                        props.onAnswer(answer);
                        {
                            props.isCorrect == true ? (null) : (varnotcorrect++)
                        }
                                      
                    }}>
                        <Text style={{fontSize:18,fontWeight: 'bold', color:'white'}}>{answer.title}</Text>
                    </TouchableOpacity> 
                                   
                ))
            }
            {
                            varnotcorrect == 5 ? (
                                <View>
                                    <Text>YOU HAVE BEEN LOSE 5/5 Attempts.</Text>
                                    <Image
                                style={{height:250,width:250}}
                                source={require('../images/failed_character.png')}
                              />                        
                                </View>
                            ) : (<Text>not correct: {varnotcorrect} / 5</Text>)
                        }  
                         
            {
                
                
            }
        </View>
    )
}

const style = StyleSheet.create({
title:{
    fontSize:22,padding:5,margin:5
},
container: {
height:'50%',width:'100%'
},
btn: {
    marginBottom:20,borderRadius:15,shadowOpacity:0.15,elevation:5,padding:17,backgroundColor:'#3ff',padding:30
}
});

export default Quiz1;

