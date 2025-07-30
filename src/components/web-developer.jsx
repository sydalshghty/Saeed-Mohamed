import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import webdeveloperImg from "../assets/web-developer.png";
import readmoreIcon from "../assets/readmore-Icon.svg";
import { motion } from "framer-motion";
import "../css/web-developer.css";
function WebDeveloper(){
    const navigate = useNavigate("");
    const navigateBlogs = () => {
        navigate("/Blogs");
    }

    return(
         <div className="web-developer">
            <div className="alldeveloper-content">
                <motion.img 
                initial={{x: -100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 0.8, delay: 1}}
                className="img-webdeveloper" src={webdeveloperImg} alt="web-developer"/>
                <div className="content-web-developer">
                    <motion.h2 
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 1}}
                    >What does it take to become a web developer?</motion.h2>
                    <motion.p
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 1.4}}
                    >Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet…</motion.p>
                    <motion.div className="col-readmore"
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 1.8}}
                    >
                        <Link className="link-readmore" to={"/Blogs"}>Read More</Link>
                        <img src={readmoreIcon} onClick={navigateBlogs} alt="img-readmore"/>
                    </motion.div>
                    <div className="content-developer">
                        <motion.div className="developer"
                        initial={{y: 60, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.8, delay: 2}}
                        >
                            <h3>Web Developer</h3>
                        </motion.div>
                        <div className="all-text">
                            <motion.div className="col-text"
                            initial={{y: 80, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{duration: 0.8, delay: 2.4}}
                            >
                                <h4>Text</h4>
                                <p>saeed</p>
                            </motion.div>
                            <motion.div className="col-date"
                            initial={{y: 100, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{duration: 0.8, delay: 2.8}}
                            >
                                <h4>Date</h4>
                                <p>10.Oct 2023</p>
                            </motion.div>
                            <motion.div className="col-read"
                            initial={{y: 120, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{duration: 0.8, delay: 3.2}}
                            >
                                <h4>Read</h4>
                                <p>1 Min</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WebDeveloper;