import imgBlogs from "../assets/Blogs-bg.png";
import imgScroll from "../assets/Scroll.svg";
import blogsTitle from "../assets/Blogs-Title.svg";
import blogsline from "../assets/blogs-Line 22.svg";
import { useNavigate } from "react-router-dom";
import WebDeveloper from "./web-developer";
import "../css/blogs-content-home.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function BlogsContentHome(){
    const { ref, inView } = useInView({ triggerOnce: true });
    const [titleRef, titleInView] = useInView({ triggerOnce: true });

    const navigate = useNavigate("");
    const navigateBlogs = () => {
        navigate("/Blogs");
    }
    return(
        <div className="relative flex items-center justify-center w-full overflow-hidden blogs-departament">
            <img className="absolute top-0 left-0 w-full h-full img-background" src={imgBlogs} alt="blogs-background"/>
            <div className="container z-50 w-full h-full pt-16 pb-16 mt-16">
                <motion.div className="flex flex-col items-center justify-center col-blogs"
                    ref={ref}
                    initial={{ opacity: 0, y: 80 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <img className="mb-5 img-scroll" src={imgScroll} alt="img-blogs"/>
                    <div className="flex flex-col items-center justify-center blogs-title">
                        <img className="mb-2 img-title" src={blogsTitle} alt="blogs-Title"/>
                        <img className="mb-2 img-line" src={blogsline} alt=""/>
                        <p className="text-white">My thoughts on technology and business, welcome to subscribe</p>
                    </div>
                </motion.div>
                <WebDeveloper/>
                <motion.div className="flex justify-center w-full view-subscribe-buttons"
                    ref={titleRef}
                    initial={{ opacity: 0, y: 80 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 1.1 }}
                >
                    <button className="relative w-40 pt-4 pb-4 pl-8 pr-8 mr-10 text-base border-none rounded-full cursor-pointer viewMore-btn h-14 font-extralight bg-brandcolor1 text-bg1color" onClick={navigateBlogs}>View More</button>
                    <button className="relative w-40 pt-4 pb-4 pl-8 pr-8 text-base rounded-full cursor-pointer subscribe-btn h-14 font-extralight" onClick={navigateBlogs}>Subscribe</button>
                </motion.div>
            </div>
        </div>
    )
}
export default BlogsContentHome;