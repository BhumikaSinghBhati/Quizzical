import React from "react"
import Questions from "./Questions";
import {nanoid} from "nanoid"
import blueBlob from "../images/Blue.png"
import yellowBlob from "../images/Yellow.png" 

export default function QuestionsList(){
    const [questions,setQuestions] = React.useState([])
    const [checked, setChecked] = React.useState(false);
    const [correct, setCorrect] = React.useState(0);
    const [count, setCount] = React.useState(0);
 
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    React.useEffect(() => {
        async function getQuestion() {
            const res = await fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple')
            const data = await res.json()
            let q = []
            data.results.forEach(question=>{
                q.push({id:nanoid(), question: question.question, answers: shuffle([...question.incorrect_answers, question.correct_answer]), correct: question.correct_answer, selected: null, checked: false})
            })
            setQuestions(q)
        }
        getQuestion()
    }, [count])  

    const questionElement  = questions.map(item => {
        return(
        <Questions
            key = {item.id}
            item = {item}
            id = {item.id}
            que = {item.question}
            handleClickAnswer = {handleClickAnswer}
        />
        )
    })

    function handleCheck(){
        let select = false;
        questions.forEach(question =>{
            if(question.selected === null){
                select = true
                return;
            }
        })

        if(select){
            return;
        }
        
        setQuestions(questions => questions.map(question =>{
            return{...question, checked : true}
        }))
        setChecked(true);
        
        let correct = 0;

        questions.forEach(question => {
            if(question.selected === question.correct){
                correct+=1
            }
        })

        setCorrect(correct)
    }

    function handleClickAnswer(id, answer){
        setQuestions(questions => questions.map(question => {
            return question.id === id ? {...question, selected: answer} : question;
        }))
    }

    function handlePlayAgain(){
        setCount(count => count+ 1);
        setChecked(false)
        setCorrect(0)

    }



    return(

        <div className="Ques">
            <img className='yellow' src={yellowBlob} alt="" />
            <div className="form">
                    {questionElement}
                    <button className="check" type="submit" onClick={checked ?   handlePlayAgain : handleCheck}>{checked ? "Play Again": "Check answer" }  </button>
                    <div className={checked ? "show" : "hide"}>You Scored - {correct}/10</div>
            </div>
            <img className='blue' src={blueBlob} alt="" />
        </div>
    )
}

