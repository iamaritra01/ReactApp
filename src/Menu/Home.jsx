import React from "react";
import Common from "../Components/Common";
import home from '../Images/undraw_development_re_g5hq.svg'
function Home(props) {
  return (
    <div>
        <Common heading="We help to Grow Your Business" button="Get Started" imgsrc={home}/>
    </div>
  );
}

export default Home;
