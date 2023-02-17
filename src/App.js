import './App.css';
import { useEffect, useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
function App() {

  const [firtsnum, setFirstnum] = useState('');
  const [guess,setGuess] =  useState(0);
  const [test,setTest] =  useState(0);
  const [instruct,setInstruct] = useState('');
  const [init,setInit] = useState(false);
  

 
  const clearinput = () =>{
    setInit(true);
    document.getElementById("firstinput").value = 0;
    document.getElementById("firstinputdiv").classList.add("hidden");
    document.getElementById("secondinputdiv").classList.add("visible");
  }

  // const checkf = ()=>{
  //   if (guess>firtsnum){
  //     console.log("hello")
  //     return
        
  //       <div>less</div>
      
  //   }
  //   else if  (guess<firtsnum){
  //     return(
  //       <div>more</div>
  //     )
  //   }
  //   else if (guess === firtsnum){
  //     return(
  //       <div>correct!</div>
  //     )
  //   }
  // }
  useEffect(
    
    () => {
      if (guess > firtsnum) {
        console.log("higher");
        
        setInstruct("go lower");
        
        
      } else if (guess < firtsnum) {
        console.log("lower");

        setInstruct("go higher");

      } else if (guess === firtsnum) {
        setInstruct("Correct");
      }
      
    }
    
    ,[test]);
  // const Numberinput = () =>{
  //   console.log(firtsnum);
  //   return(
  //     <input value={firtsnum} onChange={(e)=>(setFirstnum(e.target.value))}></input>
  //   )
  // }
  
  return (
    <div className="App">
         <div id="firstinputdiv">
<input type="number" id='firstinput' value={firtsnum} onChange={(e)=>(setFirstnum(e.target.value))}></input>
<button onClick={clearinput}>submit</button>
        
         </div>
         <div id="secondinputdiv" className='hidden'>
          <div>
          ok now guess
          </div>
          <input type='number' value={guess} onChange={(e)=>(setGuess(e.target.value))} ></input>
             <button onClick={()=>(setTest(test+1))}>check</button>
             <br></br>
      <br></br>
             <div>
             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              
      <Stack direction="row" spacing={2}>
      
<Button variant="contained"  onClick={()=>(setGuess(Number(guess)+1))}>+</Button>
<Button variant="outlined" onClick={()=>(setGuess(Number(guess)-1))}>-</Button>
</Stack>
    </div>
  
             </div>
         </div>
         <br></br>
         {instruct}
         

    </div>

  );
}

export default App;
