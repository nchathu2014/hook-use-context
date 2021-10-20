import React,{useState,createContext} from 'react';
//import './App.css';
import Parent from './components/Parent'
export const NameContext = createContext();

function App() {
const [name,setName] = useState("Nuwan");
  return (
    <main>
    <NameContext.Provider value= {name}>
      <Parent/>
    </NameContext.Provider>
    <button onClick={()=>setName('Nuwan 1')}>Change the Name</button>
    </main>
  );
}

export default App;