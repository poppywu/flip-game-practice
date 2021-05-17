import React,{useState} from 'react';
import Card from './Card';
import './Game.css';

function Game({numOfCards,order}) {
    const [faceup,setFaceup]=useState(Array(numOfCards).fill(false));
  const [prevNumber,setPrevNumber]=useState(null);
  const [preNumberIndex,setPrevNumberIndex]=useState(null);
  const arrange=[...order];
  const handleClick=(index) => {
    return ()=>{
      if (prevNumber){
        if (arrange[index]===prevNumber){
          let newFaceup=[...faceup];
          newFaceup[index]=true;
          setFaceup(newFaceup);
          
        }else{
          let newFaceup=[...faceup];
          newFaceup[preNumberIndex]=false;
          setFaceup(newFaceup);
        }
        setPrevNumber(null);
        setPrevNumberIndex(null);
      }else{
        setPrevNumber(arrange[index]);
        setPrevNumberIndex(index);
        let newFaceup=[...faceup];
        newFaceup[index]=true;
        setFaceup(newFaceup);
      }   
    } 
  }
  return (
    <div className="game">
    {arrange.map((num,index)=>{
      return (<Card key={index} number={num} faceup={faceup[index]} onClick={handleClick(index)}/>)
    })}
    </div>
  );
}

export default Game
