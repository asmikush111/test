import {useState} from 'react';

const List=({id,que,ans})=>{
  let [show,setShow]=useState(false);
  
  return <li>
  <h2><button onClick={()=>setShow(!show)}>{show?'--':'+'}</button>{que}</h2>
  {show && <p>{ans}</p>}
  </li>;
}

export default List;