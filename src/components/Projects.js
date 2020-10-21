import React from 'react';
import { Link } from "react-router-dom";
function Projects(props) {
    return (
        <div>
        <div className="projects">
<article className='container'>
<div class= "container1">
<h1>NewsRoom</h1>
        <p>Created a news website utilizing APIs to draw the top headlines from around the web to one location.</p>
<ul><li>Technologies utilized: Javascript, HTML, CSS and APIs</li></ul> 

<a href = "https://newsroomapp.netlify.app/"><button className="button">NewsRoom</button></a>
</div>
<div>
    <img className= "projectlogo" src ="./newsapp.png"></img>
</div>
</article>

<article className='container'>
<div className="projects">
<h1>The Long Night</h1>
<p>Constructed a 'choose your own adventure' style game based on the Game of Thrones series!</p>
<ul>
<li>Technologies utilized: Canvas, Javascript, HTML and CSS </li></ul>
<a href = "https://rqsell.github.io/G-O-T/">
<button className="button">The Long Night</button></a>
</div>
<div>
<img className= "projectlogo" src="./aryaTransp.gif"></img>
</div>
</article>

<article className='container' >
<div className="projects">
<h1>Little Leaf Big Tree</h1>
<p>Developed an application to create and organize users upcoming goals and tasks. Inputted goals and tasks are displayed on a calendar to help participants stay on track.</p>
<ul>
<li>Technologies utilized: React, HTML and CSS </li></ul>
<a href = "https://littleleaf.netlify.app"><button className="button">Little Leaf Big Tree</button></a>
</div>
<div>
<img className= "projectlogo3" src="./LittleLeaf.png"></img>
</div>
</article>

  </div>
  </div>
    );
}

export default Projects;