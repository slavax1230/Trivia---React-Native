import { StyleSheet, Text, View,Image,ImageBackground,Button,TouchableOpacity} from 'react-native';
import React, {useState,useEffect} from 'react';
import Quiz1 from '../screens/quiz1';
import End from '../screens/end';

const Quiz0 = (props) => {


    let TQArr = [];
  
    const [questions,setQuestions] = useState ([]);
    const [nextQuestion,setNextQuestion] = useState (0);
    const [currentQuestion,setCurrentQuestion] = useState (0);
  
  
    useEffect(async() => {
      const url = 'https://opentdb.com/api.php?amount=20&category=18';
      const response = await fetch(url, {method: 'get'});
      const rdata = await response.json();
  
      let questionID = 0;
  
      rdata.results.forEach(question => {
  
        let answers = [];
  
        // correct 
        const correct_answer = {title: question.correct_answer, isCorrect: true};
        answers.push(correct_answer);
        // incorrect 
        question.incorrect_answers.forEach(item => {
          const incorrect_answer = {title: item, isCorrect: false};
          answers.push(incorrect_answer);
        })
  
        const fquestion = {
          id: questionID++, 
          title: question.question,
          type: question.type,
          category: question.category,
          difficulty: question.difficulty,
          answers: shuffle(answers)
  
        }
        TQArr.push(fquestion)
      })
      console.log(JSON.stringify(TQArr))
      setQuestions(TQArr)
    },[])
  
    const shuffle = (arr) => {
      let currentIndex = arr.length, randomIndex;
      while (currentIndex != 0)
      {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--; 
        [arr[currentIndex],arr[randomIndex]] = [arr[randomIndex],arr[currentIndex]];
      }
      return arr;
    }
  
  
    const onNextQuestion = () => {
      let number = currentQuestion;
      number++;
      setCurrentQuestion(number);
      let nextQuest = questions[currentQuestion].id;
      setNextQuestion(nextQuest);
    }

    const onAnswer = (answer) => {
      console.log(JSON.stringify(answer));
    }


    const questionsUI = questions.map((question,index) => {
      if (nextQuestion == question.id)
      {
        return <Quiz1 
        key={index} 
        Quiz1={question}
        onNextQuestion={onNextQuestion}
        onAnswer={onAnswer}
        lastQueston={questions.length}
         />
      }
    })
    
      return (
        <View style={style.container}>
          {
            questions.length > 0  ? (questionsUI) : (<Text style={{fontSize:70,fontWeight:'bold'}}>Loading......</Text>)
          }
        </View>
      )
  }
  const style = StyleSheet.create({
    container:{
      padding: 55
    }
  })
  export default Quiz0