import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../css/Footer.css";
function Footer() {
    return(
         <div className="footer-departament" >
            <div className="container">
                <motion.div className="col-right"
                    initial={{x: -100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 2}}
                >
                    <p>© 2025 SaeedMohamed.All rights reserved.</p>
                </motion.div>
                <ul>
                    <motion.li
                        initial={{y: 50, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.8, delay: 2.2}}
                    >
                        <a href="#">PrivacyPolicy</a>
                    </motion.li>
                    <li>
                        <a href="#">Terms&Conditions</a>
                    </li>
                </ul>
                <div className="col-Social">
                    <div className="col-link">
                        <NavLink  to={"https://www.linkedin.com/in/saeed-mohamed-668992339/"} target="_blank" >
                            <FaLinkedin/>
                        </NavLink>
                    </div>
                    <div className="col-link">
                        <NavLink  to={"https://wa.me/201271382350"} target="_blank" className={"col-link"}>
                            <FaWhatsapp/>
                        </NavLink>
                    </div>
                    <div className="col-link">
                        <NavLink to={"https://github.com/sydalshghty"} target="_blank" className={"col-link"}>
                            <AiOutlineGithub/>
                        </NavLink>
                    </div>
                </div>
                <motion.div className="col-design"
                    initial={{x: -100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 2}}
                >
                    <p>Design By</p>
                    <p>saeedmohamed</p>
                </motion.div>
            </div>
        </div>
    )
}
export default Footer;