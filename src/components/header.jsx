import "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import { Link } from "react-scroll";
import "../css/header.css";

function Header() {
    const logo = `<S/>`;
    const [appear, setAppear] = useState(false);
    const [xMark, setxMark] = useState(true);
    const inputRef = useRef("");
    if (inputRef.current) {
        inputRef.current.focus();
    }

    const handleAppear = () => {
        setAppear(!appear);
    }
    const handleMark = () => {
        setxMark(!xMark);
    }

    return (
        <>
            <div className="flex justify-center w-full h-24 p-16 header-departament bg-bg1color">
                <div className="container relative flex items-center justify-between">
                    <div className="flex items-center col-logo">
                        <h2 className="mr-1 text-3xl font-medium text-brandcolor1">{logo}</h2>
                        <h3 className="text-3xl font-medium text-colorwhite">saeedMohamed</h3>
                    </div>
                    <div className="flex justify-between content-Social">
                        <ul className="flex">
                            <li>
                                <Link className="relative ml-4 text-2xl font-normal cursor-pointer text-brandcolor1"
                                    to="Home"
                                    smooth={true}
                                    duration={500}
                                >Home</Link>
                            </li>
                            <li>
                                <Link className="relative ml-4 text-2xl font-normal cursor-pointer text-colorwhite"
                                    to="About-me"
                                    smooth={true}
                                    duration={500}
                                >About me</Link>
                            </li>
                            <li>
                                <Link className="relative ml-4 text-2xl font-normal cursor-pointer text-colorwhite"
                                    to="Skills"
                                    smooth={true}
                                    duration={500}
                                >Skills</Link>
                            </li>
                            <li>
                                <Link className="relative ml-4 text-2xl font-normal cursor-pointer text-colorwhite"
                                    to="Works"
                                    smooth={true}
                                    duration={500}
                                >Works</Link>
                            </li>
                            <li>
                                <Link className="relative ml-4 text-2xl font-normal cursor-pointer blogsLink text-colorwhite"
                                    to="Blogs"
                                    smooth={true}
                                    duration={500}
                                >Blogs</Link>
                            </li>
                            <li>
                                <Link className="relative ml-4 text-2xl font-normal cursor-pointer blogsLink text-colorwhite"
                                    to="Contact"
                                    smooth={true}
                                    duration={500}
                                >Contact</Link>
                            </li>
                        </ul>
                        <div className="flex items-center col-search bg-colorwhite rounded-3xl">
                            <input type="text" className="h-full ml-5 border-none outline-none rounded-3xl" />
                            {xMark ?
                                <FontAwesomeIcon className="text-xs cursor-pointer icon" onClick={() => {
                                    handleAppear();
                                    handleMark();
                                }} icon={faSearch} />
                                :
                                <FontAwesomeIcon className="text-xs cursor-pointer icon" onClick={() => {
                                    handleAppear();
                                    handleMark();
                                }} icon={faXmark} />
                            }
                        </div>
                        <div className="flex items-center col-social">
                            <div className="flex items-center justify-center ml-5">
                                <NavLink target="_blank" to={"https://www.linkedin.com/in/saeed-mohamed-668992339/"}>
                                    <FontAwesomeIcon className="w-5 h-5 mr-2 cursor-pointer icon text-brandcolor1" icon={faLinkedin} />
                                </NavLink>
                                <NavLink className={"link text-base font-normal text-colorwhite transition-colors duration-75 text-center"} target="_blank" to={"https://www.linkedin.com/in/saeed-mohamed-668992339/"}>linkedin</NavLink>
                            </div>
                            <div className="flex items-center justify-center ml-5">
                                <NavLink target="_blank" to={"https://wa.me/201271382350"}>
                                    <FontAwesomeIcon className="w-5 h-5 mr-2 cursor-pointer icon text-brandcolor1" icon={faWhatsapp} />
                                </NavLink>
                                <NavLink className={"link text-base font-normal text-colorwhite transition-colors duration-75 text-center"} target="_blank" to={"https://wa.me/201271382350"}>whatsapp</NavLink>
                            </div>
                            <div className="flex items-center justify-center ml-5">
                                <NavLink target="_blank" to={"https://github.com/sydalshghty"}>
                                    <FontAwesomeIcon className="w-5 h-5 mr-2 cursor-pointer icon text-brandcolor1" icon={faGithub} />
                                </NavLink>
                                <NavLink className={"link text-base font-normal text-colorwhite transition-colors duration-75 text-center"} target="_blank" to={"https://github.com/sydalshghty"}>Github</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`input-search ${appear ? "appearSearch" : ""}`}>
                <input ref={inputRef} type="search" />
            </div>
        </>
    )
}
export default Header;