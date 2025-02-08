import React from 'react';
import SubmitButton from "./SubmitButton.jsx";

const ContactForm = () => {
    return (
        <div className="container py-5 mt-5 d-flex justify-content-center align-items-center" style={{minHeight: "80vh"}}>
            <div className="card p-4" style={{width: "650px", borderRadius: "12px"}}>
                <i style={{fontSize: "40px", display: "flex", justifyContent: "center", marginBottom: "30px"}} className="bi bi-envelope"></i>
                <h3 className="text-center fw-bold">Contact With Us</h3>
                <p className="text-center text-muted fw-light">Please Fill This Form</p>
                <hr/>

                <form>
                    {/* Name Input */}
                    <div className="mb-4 mt-4">
                        <p className="fw-bold ">Full Name</p>
                        <input type="text" required={true} className="form-control" placeholder="Enter Your Name"/>
                    </div>

                    {/* Email Input */}
                    <div className="mb-4 mt-4">
                        <p className="fw-bold">Email Address</p>
                        <input type="email" required={true} className="form-control" placeholder="Enter Your Email"/>
                    </div>

                    {/* Message Input */}
                    <div className="mb-4 mt-4">
                        <p className="fw-bold">Message</p>
                        <textarea style={{resize: "none", height: "200px"}} required={true} className="form-control"
                                  rows="3" placeholder="Write your message"></textarea>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-100">Send Message</button>
                </form>
            </div>
        </div>

    );
};

export default ContactForm;