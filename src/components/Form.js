import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const formRef = useRef();
    const buttonRef = useRef();
    const messageRef = useRef();

    const [sending_email, set_send_email] = useState(false);
    const [email_cooldown, set_email_cooldown] = useState(false);
    function send_disappearing_message(message){
        if(messageRef.current){
            messageRef.current.innerText = message;
            messageRef.current.className = "fw-bold";
            messageRef.current.style.opacity = "1.0";
        }
        //Start fading after 2 seconds
        setTimeout(async () => {
            let opacity = 1.0;
            const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
            //Opacity is reduced by 0.05 every 0.1 millisecond to provide a fading effect.
            while (opacity > 0) {
                opacity-=0.05;
                messageRef.current.style.opacity = opacity.toString();
                await sleep(100);
            }
            if (messageRef.current) {
                messageRef.current.innerText = "";
            }
        }, 2000);
    }

    function validate_field(e){
        let field = e.target.value;
        //Field is empty
        if(field.length === 0){
            e.target.setCustomValidity("Required Field");
            //Rest of code not needed
            return false;
        }
        else{
            e.target.setCustomValidity("");
        }

        let regex;
        if(e.target.name === "name"){
            regex = /^[A-Za-z ]+$/;
        }
        else{
            regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        }

        //Validate Regex
        if (!regex.test(field)) {
            if(e.target.name === "name"){e.target.setCustomValidity("Please use only letters and spaces.");}
            else{e.target.setCustomValidity("Please use a valid email format.");}
            //Rest of code not needed
            return false;
        }
        else{
            e.target.setCustomValidity("");
        }
        //No Issues Found
        return true;
    }

    function sanitise_field(field){
        //Remove HTML Content
        field = field.replace(/<[^>]*>?/gm, '');
        //Remove JavaScript URLs
        field = field.replace(/javascript:/gi, '');
        //Strip excessive whitespace
        field = field.trim();
        return field;

    }

    const sendEmail = (e) => {
        e.preventDefault();
        if(email_cooldown){
            send_disappearing_message("Please wait button is currently on cooldown.");
            return;
        }

        if(sending_email) {
            return;
        }

        //Validate Input
        if(!(validate_field({target: formRef.current.name}) && validate_field({target: formRef.current.email}))){
            formRef.current.name.reportValidity();
            formRef.current.email.reportValidity();
            return;
        }

        //Switch Boolean so button is disabled (spam protection)
        set_send_email(true);

        //Get and Sanitise Input Values
        const sanitised_input = {
            name: sanitise_field(formRef.current.name.value),
            email: sanitise_field(formRef.current.email.value),
            message: sanitise_field(formRef.current.message.value)
        };

        //Init the EmailJS API to allow the email to be sent.
        emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_API_KEY);

        //Get ENV Variables
        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

        emailjs.send(serviceID, templateID, sanitised_input)
            .then(() => {
                //Clear Form - Reduce Spamming
                document.getElementById("contact_form").reset();
                send_disappearing_message("Your email has been successfully sent!");
            })
            .catch((err) => {
                alert(JSON.stringify(err));
            })
            .finally(() => {
                set_email_cooldown(true);
                set_send_email(false);
                //Disallows User to send another email for 10 seconds.
                setTimeout(async () => {
                    set_email_cooldown(false);
                },10000);
            })
    };


    return (
        <>
            <form id={"contact_form"} ref={formRef} onSubmit={sendEmail} className="container">
                <div className="row mb-3 align-items-center">
                    <label className="col-sm-3 col-form-label" htmlFor="name">Name <strong style={{color: "red"}}>*</strong></label>
                    <div className="col-sm-9">
                        <input type="text" name="name" id="name" className="form-control" onInput={validate_field}/>
                    </div>
                </div>

                <div className="row mb-3 align-items-center">
                    <label className="col-sm-3 col-form-label" htmlFor="email">Email <strong style={{color: "red"}}>*</strong></label>
                    <div className="col-sm-9">
                        <input type="email" name="email" id="email" className="form-control" onInput={validate_field}/>
                    </div>
                </div>

                <div className="row mb-3 align-items-center">
                    <label className="col-sm-3 col-form-label" htmlFor="message">Message</label>
                    <div className="col-sm-9">
                        <textarea name="message" id="message" className="form-control"></textarea>
                    </div>
                </div>

                <input type="submit" id="button" ref={buttonRef} value={sending_email ? "Sending..." : "Send Email"} disabled={sending_email} className="btn btn-primary border border-2 border-black fw-bold"/>
            </form>
            {/*Message Displayed to User*/}
            <div className={"mt-4"}>
                <div className={"m-3"}>
                    <p id={"display_message"} ref={messageRef} className={"invisible"}></p>
                </div>
            </div>
        </>
    );
};

export default ContactForm;