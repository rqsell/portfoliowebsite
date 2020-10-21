import React from 'react';

function About(props) {
    return (
        <div className= "about">
        <article className='aboutme'>
            <h1 id="skillsh1">About Me</h1>
            <span>
            I began working in the arts at the age of 15, and went on to have a wide range of internships and jobs in the artistic field for the next decade. As I gained knowledge and experience in the industry my awareness only deepened that my true passion came from a desire to make visitors feel connected to the art they were viewing by communicating not only the history piece, but of all the social factors surrounding it.<br/> <br/>
An interest in creating solutions to communicate with groups of people began my career as a full-stack developer. I have carried that goal with me designing interactive websites and applications to help clients share their message and values directly to their desired audience.
            </span>
        </article>
            <article className='skills'>
                <h1 >Skills</h1>
                <span>JavaScript<br/>React.js<br/> Express.js<br/>MongoDB<br/> Node.js<br/> HTML<br/> CSS<br/> SCSS<br/> AJAX<br/> jQuery<br/> Responsive Design<br/> Bootstrap<br/> Git<br/> GitHub<br/> InDesign <br/> Photoshop

</span>
            </article>
        </div>
    );
}

export default About;