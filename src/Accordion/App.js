
import data from './data';
import List from './list';

const App=()=>{
    
    return <div>
        <h1>React Interview Questions</h1>
        <ul>
            {data.map((val)=>{
               return <List key={val.id} {...val}/>;
            })}
         </ul>
    </div>;
}

export default App;