import React, { Component } from "react";
import "./Contact.css";
export default class Contact extends Component {
    render() {
        return (
            <div className="contact section">
                <h5 className="title">CONTACT</h5>
                <div className="contact-container">
                    <form action="">
                        <div className="form-row">
                            <label htmlFor="contact-name">Name: </label>
                            <input
                                type="text"
                                name="contact-name"
                                id="contact-name"
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="contact-email">Email: </label>
                            <input
                                type="text"
                                name="contact-email"
                                id="contact-email"
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="contact-message">Message: </label>
                            <textarea
                                name="contact-message"
                                id="contact-message"
                                cols="60"
                                rows="20"
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
