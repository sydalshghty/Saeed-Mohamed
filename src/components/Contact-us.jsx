import contactBackground from "../assets/Contact.png";
import scrollImg from "../assets/Scroll.svg";
import contactTitle from "../assets/Contact-Title.svg";
import contactLine from "../assets/Contact-Line 22.svg";
import { Link } from "react-router-dom";
import sendIcon from "../assets/icon-send.svg";
import { useState,useRef } from "react";
import emailjs from '@emailjs/browser';
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "../css/contact-us.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function ContactUs() {
    const formRef = useRef();
    const [name, setName] = useState("Enter your name");
    const [email, setEmail] = useState("Enter your email");
    const [message, setMessage] = useState("Enter your needs");

    const { ref, inView } = useInView({ triggerOnce: true });
    const [titleRef, titleInView] = useInView({ triggerOnce: true });
    const [headingRef, headingInView] = useInView({ triggerOnce: true });

    const sendEmail = (e) => 
        e.preventDefault();
        emailjs.sendForm(
            "service_12Saeed",
            "template_ID",
            formRef.current,
            "6Qr0bv84xnQ6VMGSL",
        )
        .then((result) => 
            console.log("The message has been sent successfully"))
        , (error) => {
            alert("There was an error while sending the message")
        }
    {
    }

    return(
        <div className="relative flex items-center justify-center w-full contact-departament ">
            <img className="contact-background" src={contactBackground} alt="contact-background"/>
            <div className="container absolute top-0 flex flex-col items-center justify-center w-full h-full pt-16 pb-16">
                <motion.div className="title-contact"
                    ref={ref}
                    initial={{ opacity: 0, y: 80 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <img className="scroll-img" src={scrollImg} alt="img-scroll"/>
                    <div className="col-content">
                        <img src={contactTitle} alt="img-contact"/>
                        <img src={contactLine} alt="img-line"/>
                        <p>I’m currently available for freelance work</p>
                    </div>
                </motion.div>
                <motion.div className="col-sendMessage"
                    ref={titleRef}
                    initial={{ opacity: 0, y: 80 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <h1>Send me a message</h1>
                </motion.div>
                <motion.div className="form-content"
                    ref={headingRef}
                    initial={{ opacity: 0, y: 80 }}
                    animate={headingInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    <form ref={formRef}>
                        <div className="name-email-cols">
                            <div className="col-name">
                                <div className="heading-name">
                                    <p>Your name</p>
                                    <span>*</span>
                                </div>
                                <input onFocus={() => {
                                    setName("");
                                }} 
                                onBlur={() => {
                                    setName("Enter your name");
                                }}
                                type="text" name="name" placeholder={name} required/>
                            </div>
                            <div className="col-email">
                                <div className="heading-email">
                                    <p>Your email</p>
                                    <span>*</span>
                                </div>
                                <input onFocus={() => {
                                    setEmail("");
                                }} 
                                onBlur={() => {
                                    setEmail("Enter your email");
                                }}
                                type="text" name="email" placeholder={email} required/>
                            </div>
                        </div>
                        <div className="message-col">
                            <div className="heading-message">
                                <p>Your message</p>
                                <span>*</span>
                            </div>
                            <input onFocus={() => {
                                setMessage("");
                            }} 
                            onBlur={() => {
                                setMessage("Enter your needs");
                            }}
                            type="text" name="message" placeholder={message} required/>
                        </div>
                        <div className="btn-col" onSubmit={sendEmail}>
                            <Link className="link-message" to={""}>Send Message</Link>
                            <img src={sendIcon} alt="message-img"/>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}
export default ContactUs;