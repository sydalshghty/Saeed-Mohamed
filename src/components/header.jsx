import "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faXmark } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink,Link } from "react-router-dom";
import { useRef, useState } from "react";
import "../css/header.css";

function Header(){
    const logo = `<S/>`;
    const [appear,setAppear] = useState(false);
    const [xMark,setxMark] = useState(true);
    const inputRef = useRef("");
    if(inputRef.current){
        inputRef.current.focus();
    }

    const handleAppear = () => {
        setAppear(!appear);
    }
    const handleMark = () => {
        setxMark(!xMark);
    }

    return(
        <>
            <div className="header-departament w-full h-24 bg-bg1color flex justify-center p-16">
                <div className="container flex justify-between items-center relative">
                    <div className="col-logo flex items-center">
                        <h2 className="text-3xl font-medium text-brandcolor1 mr-1">{logo}</h2>
                        <h3 className="text-3xl font-medium text-colorwhite">saeedMohamed</h3>
                    </div>
                    <div className="content-Social flex justify-between">
                        <ul className="flex">
                            <li>
                                <Link to={"/Home"} className="text-2xl font-normal ml-4 relative text-brandcolor1">Home</Link>
                            </li>
                            <li>
                                <Link className="blogsLink text-2xl font-normal ml-4 relative text-colorwhite" to={"/Blogs"}>Blogs</Link>
                            </li>
                        </ul>
                        <div className="col-search bg-colorwhite rounded-3xl flex items-center">
                            <input type="text" className="h-full rounded-3xl border-none outline-none ml-5"/>
                            {xMark ? 
                                <FontAwesomeIcon className="icon text-xs cursor-pointer" onClick={() => {
                                    handleAppear();
                                    handleMark();
                                }} icon={faSearch}/>
                                :
                                <FontAwesomeIcon className="icon text-xs cursor-pointer" onClick={() => {
                                    handleAppear();
                                    handleMark();
                                }} icon={faXmark}/>
                            }
                        </div>
                        <div className="col-social flex items-center">
                            <div className="flex justify-center items-center ml-5">
                                <NavLink target="_blank"  to={"https://www.linkedin.com/in/saeed-mohamed-668992339/"}>
                                <FontAwesomeIcon  className="icon cursor-pointer w-5 h-5 mr-2 text-brandcolor1" icon={faLinkedin}/>
                                </NavLink>
                                <NavLink className={"link text-base font-normal text-colorwhite transition-colors duration-75 text-center"} target="_blank"  to={"https://www.linkedin.com/in/saeed-mohamed-668992339/"}>linkedin</NavLink>
                            </div>
                            <div className="flex justify-center items-center ml-5">
                                <NavLink target="_blank" to={"https://wa.me/201271382350"}>
                                <FontAwesomeIcon className="icon cursor-pointer w-5 h-5 mr-2 text-brandcolor1" icon={faWhatsapp}/>
                                </NavLink>
                                <NavLink className={"link text-base font-normal text-colorwhite transition-colors duration-75 text-center"} target="_blank" to={"https://wa.me/201271382350"}>whatsapp</NavLink>
                            </div>
                            <div className="flex justify-center items-center ml-5">
                                <NavLink target="_blank" to={"https://github.com/sydalshghty"}>
                                <FontAwesomeIcon className="icon cursor-pointer w-5 h-5 mr-2 text-brandcolor1" icon={faGithub}/>
                                </NavLink>
                                <NavLink className={"link text-base font-normal text-colorwhite transition-colors duration-75 text-center"} target="_blank" to={"https://github.com/sydalshghty"}>Github</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`input-search ${appear ? "appearSearch" : ""}`}>
                <input ref={inputRef}  type="search"/>
            </div>
        </>
    )
}
export default Header;