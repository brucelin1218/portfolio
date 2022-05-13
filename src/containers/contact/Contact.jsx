import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact_container' id='contact'>
            <h1>Want to Connect?</h1>
            <div className="vl"></div>
            <a href="mailto:while.anaray@gmail.com" className="button wide primary">
                <button className='contact_btn'>
                    Send email
                </button>
            </a>


        </div>
    );
};

export default Contact;
