import React,{useContext,useEffect} from 'react';
import {NameContext} from './../App';



const Child = () => {
 
 useEffect(()=>{
    console.log("@@@@")
 })

  const name = useContext(NameContext)
  return <h3>I am Child: {name}</h3>
}

export default Child;