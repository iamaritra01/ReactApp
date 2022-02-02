import React, { useState } from "react";

function Contact(props) {
    const [data,setData] = useState({
        fullName: "",
        PhoneNumber: "",
        emailAdd: ""
    });
    const InputEvent = (event) =>{
        const {name,value} = event.target;

        setData((preval) => {
            return{
                ...preval,
                [name] : value,

            }
        })
    }
    const formSubmit = () =>{
        
    }
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Contact us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullName"
                  value={data.fullName}
                  onChange={InputEvent}
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="PhoneNumber"
                  value={data.PhoneNumber}
                  onChange={InputEvent}
                  placeholder="Enter Your Phone Number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="emailAdd"
                  value={data.emailAdd}
                  onChange={InputEvent}
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div className="col-12">
                <button className="btn btn-outline-secondary" type="submit">Submit Form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
