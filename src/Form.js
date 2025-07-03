import React, { useRef,useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    useEffect(() => {
        emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_API_KEY);
    }, []);

    const formRef = useRef();
    const buttonRef = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        if (buttonRef.current) {
            buttonRef.current.value = 'Sending...';
        }

        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

        emailjs.sendForm(serviceID, templateID, formRef.current)
            .then(() => {
                if (buttonRef.current) {
                    buttonRef.current.value = 'Send Email';
                }
                alert('Sent!');
            }, (err) => {
                if (buttonRef.current) {
                    buttonRef.current.value = 'Send Email';
                }
                alert(JSON.stringify(err));
            });
    };


    return (
        <form ref={formRef} onSubmit={sendEmail}>
            <div className="field">
                <label htmlFor="name">name</label>
                <input type="text" name="name" id="name" />
            </div>
            <div className="field">
                <label htmlFor="time">time</label>
                <input type="text" name="time" id="time" />
            </div>
            <div className="field">
                <label htmlFor="message">message</label>
                <input type="text" name="message" id="message" />
            </div>
            <div className="field">
                <label htmlFor="email">email</label>
                <input type="text" name="email" id="email" />
            </div>

            <input type="submit" id="button" ref={buttonRef} value="Send Email" />
            <p>{process.env.REACT_APP_SECRET_NAME}</p>
        </form>
    );
};

export default ContactForm;