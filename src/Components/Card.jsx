import React from 'react';
import { NavLink } from 'react-router-dom';

function Card(props) {
    return (
        <div>
        <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                  <img src={props.imgsrc} className="card-img-top" alt="card" />
                  <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                      {props.cardText}
                    </p>
                    <NavLink to = "/" className="btn btn-primary">
                      Go somewhere
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Card;