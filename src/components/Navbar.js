import React, {useEffect, useState} from "react";
import {jordy_blue} from "../data/colour_palette";

function Navbar() {
    const white = '#FFFFFF';
    const black = '#000000';
    const [active_tab, set_active_tab] = useState('home');

    //Close Navbar when clicking outside of it
    useEffect(() => {
        const close_navbar = (event) => {
            //Navbar Variables
            const navbar_toggler = document.getElementById("navbar_toggler");
            const toggle_button = document.querySelector(".navbar-toggler");
            //Check if navbar is open and clicked outside the navbar container
            if (navbar_toggler.classList.contains("show") && !navbar_toggler.contains(event.target) && !toggle_button.contains(event.target)) {
                toggle_button.click();
            }
        };
        document.addEventListener("click", close_navbar);
        return () => {
            document.removeEventListener("click", close_navbar);
        };
    }, []);

    const navbar_buttons = (
        <>
            {/*About Button*/}
            <button className="pg-3 navbar-brand m-0 btn border-0"
                    onClick={() => set_active_tab('about')}
                    style={active_tab === 'about' ? {color: white} : {}}>
                <strong>About</strong>
            </button>
            {/*Projects Button*/}
            <button className="pg-3 navbar-brand m-0 btn border-0"
                    onClick={() => set_active_tab('projects')}
                    style={active_tab === 'projects' ? {color: white} : {}}>
                <strong>Projects</strong>
            </button>
            {/*Contact Button*/}
            <button className="pg-3 navbar-brand m-0 btn border-0"
                    onClick={() => set_active_tab('contact')}
                    style={active_tab === 'contact' ? {color: white} : {}}>
                <strong>Contact</strong>
            </button>
        </>
    );

    const navbar_html = (
        <div>
            {/*Horizontal Navbar for Larger Screens > 830px*/}
            <div className="large_screen">
                <div className="p-0 m-0 d-inline-block pt-2 pe-2">
                    <nav className="navbar navbar-expand-xxl navbar-light p-0 m-0" >
                        <div className="d-flex flex-row p-0 m-0">
                            {/*Home Button*/}
                            <button className="pg-3 navbar-brand m-0 btn border-0"
                                    onClick={() => set_active_tab('home')}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     fill={active_tab === 'home' ? white : black}
                                     className="bi bi-house img-fluid"
                                     viewBox="0 0 16 16"
                                     style={{ minWidth: '40px', minHeight: '40px'}}>
                                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                                </svg>
                            </button>
                            {/*Remaining Navbar Buttons*/}
                            {navbar_buttons}
                        </div>
                    </nav>
                </div>
            </div>

            {/*Vertical Collapsible Navbar for Smaller Screens < 830px*/}
            <div className="small_screen tiny_screen">
                <div className="p-0 m-0 pt-2 pe-2">
                    <nav className="navbar navbar-light">
                        <div className="container-fluid p-2 m-0 d-flex flex-row flex-nowrap align-items-center">
                            <button className="pg-3 navbar-brand m-0 btn border-0 small_screen"
                                    onClick={() => set_active_tab('home')}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     fill={active_tab === 'home' ? white : black}
                                     className="bi bi-house img-fluid"
                                     viewBox="0 0 16 16"
                                     style={{ minWidth: '40px', minHeight: '40px'}}>
                                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                                </svg>
                            </button>
                            <button className="navbar-toggler border-3 border-black shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_toggler" aria-controls="navbar_toggler" aria-expanded="true" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="navbar-collapse collapse position-absolute end-0 z-3 rounded-bottom border border-3 border-black border-top-0"
                                 id="navbar_toggler"
                                 style={{backgroundColor: jordy_blue}}>
                                <div className="d-flex flex-column p-0 m-0">
                                    <button className="pg-3 navbar-brand m-0 btn border-0 tiny_screen"
                                            onClick={() => set_active_tab('home')}>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             fill={active_tab === 'home' ? white : black}
                                             className="bi bi-house"
                                             viewBox="0 0 16 16" width={"40px"} height={"40px"}>
                                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                                        </svg>
                                    </button>
                                    {/*Remaining Navbar Buttons*/}
                                    {navbar_buttons}
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );

    return{navbar_html, active_tab}
}

export default Navbar;