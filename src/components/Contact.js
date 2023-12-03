/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

function Contact() {
  return (
    <div className="contact-container mnm">
      <div className="col m-2">
        <h3>ContactUs</h3>
        <hr></hr>
        <ul>
          <i class="fa-solid fa-phone"></i> Mobile:
          <strong> +91 23674155548, +91 45514455102</strong>
          <br></br>
          <i class="fa-solid fa-envelope"></i> Email:
          <strong> xyz@gmail.com</strong>
          <br></br>
        </ul>
      </div>
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124373.60547694223!2d80.19526021125586!3d13.05633636586617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700897518924!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
