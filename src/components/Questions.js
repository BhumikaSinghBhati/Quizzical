import React from "react"
import {nanoid} from "nanoid"



export default function Questions(props){



  let options = props.item.answers;

  function handleClick(option){
    if(props.item.selected){
      return
    }
    else{
      props.handleClickAnswer(props.id, option)
    }
}
  
  const optionElement = options.map(option=>{
    let id = null;
    if(props.item.checked){
      if(props.item.correct === option){
        id = "correct"
      }
      else if(props.item.selected === option){
        id = "incorrect"
      }
      else{
        id = "not-selected"
      }
    }
    return (
    <button key={nanoid()} id={id} className={props.item.selected === option ? 'answer selected' : 'answer'} onClick={() => handleClick(option)}>{option}</button>
    )
  } );


    return(
        <div className="Que"> 
            <label className="question" id={props.id} name="question" >{props.que}</label>
            <section>
            <div className="btn-container">
              {optionElement}
            </div>
            <hr />
            </section>
        </div>
    )
}
