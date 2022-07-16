import {useState} from 'react';
import Sresult from './Sresult';

const App=()=>{
     const [text,setText]=useState('');
      
     const inputHandler=(event)=>{
        setText(event.target.value);
     }

      return <>
      <input type="text" onChange={inputHandler} value={text}/>
      { text!=='' && <Sresult val={text}/>}
      </>;
}

export default App;