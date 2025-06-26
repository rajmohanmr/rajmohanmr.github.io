import React from 'react';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Work from './Components/Work';
import Services from './Components/Services';
import Contact from './Components/Contact';

function App() {

  return (
    <div className="App">
      
      <Navbar/>
      <Home />
      <About />
      <Work/>
      <Services/>
      <Contact /> 
      <Sidebar/>

      {/* <About />
      <Experience />
      <Projects />
       
      */}
      
    </div>
    
  );
}

export default App;
