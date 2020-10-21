import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Home from "./components/Home"
import About from './components/About'
import Projects from "./components/Projects"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
 
    <div className="App">
       <BrowserRouter>
     <nav>

<ul className = 'navbar'>
<Link to= '/'> <li><img  className= "logo" src= "./retro-logo.png"></img></li></Link> 
    {/* <div className="links"> */}
   <Link to ="./About" style={{ textDecoration: "none" }}> <li> About </li> </Link>
   <Link to ="./Projects" style={{ textDecoration: "none" }}>  <li> Work </li> </Link>
  <Link to ='./rebecca-sell-resume copy.pdf' target="_blank" style={{ textDecoration: "none" }} download><li> Resume</li></Link>
    <li>Contact</li>
    {/* </div> */}
</ul>
</nav>
   
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/About" render={(props) => <About {...props} />} />
        <Route exact path="/Projects" render={(props) => <Projects {...props} />} />
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
