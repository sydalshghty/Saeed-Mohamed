import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import webdeveloperImg from "../assets/web-developer.png";
import readmoreIcon from "../assets/readmore-Icon.svg";
import "../css/web-developer.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function WebDeveloper(){
    const { ref, inView } = useInView({ triggerOnce: true });
    const navigate = useNavigate("");
    const navigateBlogs = () => {
        navigate("/Blogs");
    }

    return(
         <motion.div className="flex items-center justify-center w-full web-developer mt-14 mb-14"
            ref={ref}
            initial={{ opacity: 0, y: 80 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
         >
            <div className="alldeveloper-content">
                <motion.img 
                initial={{x: -100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 0.8, delay: 1}}
                className="mr-10 img-webdeveloper w-60 h-60" src={webdeveloperImg} alt="web-developer"/>
                <div className="pt-6 pb-6 content-web-developer">
                    <motion.h2 
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 1}}
                    className="mb-4 text-2xl font-light text-brandcolor1"
                    >What does it take to become a web developer?</motion.h2>
                    <motion.p
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 1.4}}
                    className="mb-4 text-sm text-white font-extralight"
                    >Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet…</motion.p>
                    <motion.div className="flex items-center mb-4 col-readmore"
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 1.8}}
                    >
                        <Link className="mr-2 text-sm link-readmore text-brandcolor1" to={"/Blogs"}>Read More</Link>
                        <img src={readmoreIcon} onClick={navigateBlogs} alt="img-readmore" className="cursor-pointer"/>
                    </motion.div>
                    <div className="flex content-developer">
                        <motion.div className="flex items-center justify-center pt-1 pb-1 pl-2 pr-2 mr-4 developer bg-graycolor rounded-2xl"
                        initial={{y: 60, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.8, delay: 2}}
                        >
                            <h3 className="text-xs text-white font-extralight">Web Developer</h3>
                        </motion.div>
                        <div className="w-full all-text">
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
        </motion.div>
    )
}
export default WebDeveloper;