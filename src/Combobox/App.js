import {useState,useEffect} from 'react';
import axios from 'axios';
const App=()=>{
   const [num,setNum]=useState();
   const [name,setName]=useState();
   const [moves,setMoves]=useState();

   useEffect(()=>{
    async function getData(){
     const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
     setName(res.data.name);
     setMoves(res.data.moves.length);
    }
    getData();
   });
   
    return <>
    <h1>{num} {name} {moves}</h1>
    <select value={num} onChange={(event)=>setNum(event.target.value)}>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
    </select>
    </>;
}


export default App;