
import './App.css';

function App() {
  return (
    <div className="App">
    
    First Name <input type='text' placeholder='Rahul'></input> <br></br>
    Last Name  <input type='text' placeholder='Kumar'></input> <br></br>
    Email address <input type='text' placeholder='rahul@125'></input>   <br></br>        
     Country<select>
      <option value="india">India</option>
      <option value="canada">canada</option>
      <option value="uk">uk</option>
      <option value="usa">usa</option>
    </select> <br></br>
      Street address <input type='text' placeholder='1234 main st'></input> <br></br>
      City <input type='text' placeholder='Gaya'></input>
    </div>
  );
}

export default App;
