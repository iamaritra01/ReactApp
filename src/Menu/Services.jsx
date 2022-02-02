import React from "react";
import Card from "../Components/Card";
// import web from '../Images/software.jpg';
import Sdata  from "../Components/Sdata";
function Services() {
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>

      {
        Sdata.map((val,ind) =>{
          return <Card key={ind}
           imgsrc={val.imgsrc} title={val.title}
          />
        })
      }
     </div>
  );
}

export default Services;
