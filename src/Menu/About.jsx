import React from 'react';
import Common from '../Components/Common';
import about from '../Images/About.svg'
function About() {
    return (
        <div>
            <Common heading="Welcome to About Page" button="Contact Us"  imgsrc={about}/>
        </div>
    );
}

export default About;