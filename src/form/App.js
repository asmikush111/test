import {useState} from'react';

function App() {
  let [data,setData]=useState({
    fname:"",
    lname:""
});
    
  const inputHandler=(event)=>{
    //const {name,value} = event.target;
    setData({
      ...data,
      [event.target.name]:(event.target.value).trim(),
    });
  }
  const submitform=(event)=>{
    event.preventDefault();
  }

  return (
  <form onSubmit={submitform}>
    <h1>{data.fname} {data.lname}</h1>
      <input type="text" onChange={inputHandler} name="fname" value={data.fname}/>
      <input type="text" onChange={inputHandler} name="lname" value={data.lname}/>
      <button type="submit" >Submit</button>
    </form>);
}

export default App;
