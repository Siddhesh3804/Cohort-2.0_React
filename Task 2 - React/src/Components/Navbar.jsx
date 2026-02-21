import React from 'react'

const Navbar = () => {
  return (
    <div id="navbar">
        <div className="nav-start">
            <h3>Horizon Courts</h3>
        </div>

        <div className="nav-center">
            <a href="#" id="aboutus">About Us</a>
            <a href="#" id="services">Services</a>
            <a href="#" id="coaches">Coaches</a>
            <a href="#" id="events">Events</a>
            <a href="#" id="contacts">Contacts</a>
        </div>

        <div className="nav-end">
            <button id="booknow">Book now <i class="ri-arrow-right-up-long-line"></i></button>
        </div>
    </div>
  )
}

export default Navbar