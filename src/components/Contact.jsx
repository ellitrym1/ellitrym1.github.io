import React, { Component, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
export default function Contact() {
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [messageBody, setMessageBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_USER_ID
            )
            .then((res) => console.log(res));
    };

    return (
        <div className="contact section">
            <h5 className="title">CONTACT</h5>
            <div className="contact-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <label htmlFor="contact-name">Name: </label>
                        <input
                            type="text"
                            name="contact-name"
                            id="contact-name"
                            onChange={(event) =>
                                setContactName(event.target.value)
                            }
                            value={contactName}
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="contact-email">Email: </label>
                        <input
                            type="text"
                            name="contact-email"
                            id="contact-email"
                            onChange={(event) =>
                                setContactEmail(event.target.value)
                            }
                            value={contactEmail}
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="message-body">Message: </label>
                        <textarea
                            name="message-body"
                            id="message-body"
                            cols="60"
                            rows="20"
                            onChange={(event) =>
                                setMessageBody(event.target.value)
                            }
                            value={messageBody}
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
