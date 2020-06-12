import React from 'react';
import './ContactUs.css';

class ContactUs extends React.Component {


    render() {
        return(
            <div className="home contact-us">
                <h2>If you have any queries, please get in touch with us.</h2>
                <h3><i class="fa fa-phone"></i><a href="tel:+61415786186"> 0400 000 000</a></h3>
                <h3><i class="fa fa-envelope"></i> <a href="mailto:enquiry@findrecipe.com">enquiry@findrecipe.com</a></h3>
               
            </div>
        )
    }
}
export default ContactUs;