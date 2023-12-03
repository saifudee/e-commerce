/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";

function Bottom() {
  return (
    <>
      <div className="row align-items-start container start">
        <div className="col m-2">
          <h3><Link to='/about'style={{textDecoration:"none", color:"black"}}>AboutUs</Link></h3>
          <hr></hr>
          <p>
            Me along with my committee members are honored and humbled to serve
            sports community through our association.I feel honored to be the
            part of the association, thereby creating the way for talent in
            sports for hidden super hero Along with sports for communities we
            are also focusing on working with all local organisations by
            participating in various charitable events and also partnering with
            them Thanks to all for supporting me and giving me this opportunity
            to serve our communities and serve our nation.
          </p>
        </div>
        <div className="col m-2 ">
          <h3><Link to='/contact'style={{textDecoration:"none", color:"black"}}>ContactUs</Link></h3>
          <hr></hr>
          <ul className="contact2">
            <i class="fa-solid fa-phone"></i> Mobile:{" "}
            <strong>+91 2685566886, +91 4569725422</strong>
            <br></br>
            <i class="fa-solid fa-envelope"></i> Email:
            <strong> xyz@gmail.com</strong>
            <br></br>
          </ul>
        </div>
        <div className="col m-2 ">
          <h3>OurCourse</h3>
          <hr></hr>
          <ul className="contact3">
            <strong> Venue: </strong> SKR Sports Association
            <br></br>
            <i class="fa-solid fa-location-dot"></i><strong>Loaction:</strong>
            1/7,dubaiRoad,Saravanstore,Chennai,TamilNadu 640000
            <br></br>
            <strong>Batch Timing:</strong>
            <h6>Monday to Friday </h6>
            <h6>Morning: 6.00 am to 8.00 am</h6>
            <h6>Evening: 4.00 pm to 6.00 pm </h6>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Bottom;
