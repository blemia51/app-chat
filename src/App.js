import React from 'react';
//import './App.css';
import Contact from './components/Contact.js'


const jack = {
  
  name: 'Jack Kim',
  avatar: 'https://randomuser.me/api/portraits/men/98.jpg',
 
  }

const nina = {
  
  name: 'Nina Turner',
  avatar:'https://randomuser.me/api/portraits/women/26.jpg',
  
  }

const markus = {
  
  name: 'markus Webb',
  avatar:'https://randomuser.me/api/portraits/men/14.jpg',
 
  }

function App() {
  return (
    <div className="App">
      
        
      <Contact  {...jack} online />
      <Contact  {...nina} />
      <Contact  {...markus} online />

  

      
     </div>
  );
}

export default App;
