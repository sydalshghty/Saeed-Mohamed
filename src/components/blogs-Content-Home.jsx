import imgBlogs from "../assets/Blogs-bg.png";
import imgScroll from "../assets/Scroll.svg";
import blogsTitle from "../assets/Blogs-Title.svg";
import blogsline from "../assets/blogs-Line 22.svg";
import { useNavigate } from "react-router-dom";
import WebDeveloper from "./web-developer";
import "../css/blogs-content-home.css";
function BlogsContentHome(){
    const navigate = useNavigate("");
    const navigateBlogs = () => {
        navigate("/Blogs");
    }
    return(
        <div className="blogs-departament">
            <img className="img-background" src={imgBlogs} alt="blogs-background"/>
            <div className="container">
                <div className="col-blogs">
                    <img className="img-scroll" src={imgScroll} alt="img-blogs"/>
                    <div className="blogs-title">
                        <img className="img-title" src={blogsTitle} alt="blogs-Title"/>
                        <img className="img-line" src={blogsline} alt=""/>
                        <p>My thoughts on technology and business, welcome to subscribe</p>
                    </div>
                </div>
                <WebDeveloper/>
                <div className="view-subscribe-buttons">
                    <button className="viewMore-btn" onClick={navigateBlogs}>View More</button>
                    <button className="subscribe-btn" onClick={navigateBlogs}>Subscribe</button>
                </div>
            </div>
        </div>
    )
}
export default BlogsContentHome;