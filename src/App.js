import './App.css';
import React, {useEffect, useState} from 'react';
import ContactForm from './components/Form.js'
import View_Project from "./functions/View_Project";
import Navbar from "./components/Navbar";
import {jordy_blue, link_water} from "./data/colour_palette";

function App() {
    document.body.style.backgroundColor = link_water;
    const {navbar_html, active_tab} = Navbar();
    const [show_background, set_show_background] = useState(false);
    const [selected_project, view_project] = useState('');

    const [filters, set_filters] = useState({
        web: false,
        game: false,
    });

    let filter_off = Object.values(filters).every(value => !value);
    const handle_checkbox_change = (event) => {
        const {name, checked} = event.target;

        //updates toggled filter bool value
        set_filters((prev) => ({
            ...prev,
            [name]: checked,
        }));

        //updates value with filter changes
        filter_off = Object.values(filters).every(value => !value);
    };

    const [fullscreen_img, set_fullscreen_img] = useState(null);
    useEffect(() => {
        const image_clicked = (e) => {
            //Checks if an img tag is clicked and does not have a parent button container - Not a project item image
            if ((e.target.tagName === "IMG") && (e.target.closest('button') === null) && (e.target.closest('a') === null) && !e.target.src.includes("/logo.png")) {
                set_fullscreen_img(e.target);
            }
        };
        document.addEventListener("click", image_clicked);
        return () => {
            document.removeEventListener("click", image_clicked);
        };
    }, []);

    const close_fullscreen_img = () => {
        set_fullscreen_img(null);
    };

    return (
        <>
            <div>
                {/*Display Fullscreen version of clicked on image*/}
                {fullscreen_img && (
                    <div className={"d-flex justify-content-center align-items-center position-fixed"}
                         style={{top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999}}>
                        <div style={{ position: 'relative' }}>
                            <img src={fullscreen_img.src} alt={fullscreen_img.alt} className={"img-fluid"} style={{maxWidth: '95vw', maxHeight: '95vh'}}/>
                            <button className="btn-close bg-white position-absolute" aria-label="Close" onClick={close_fullscreen_img}
                                    style={{top: '0.5rem', right: '0.5rem'}}/>
                        </div>
                    </div>
                )}
                <div>
                    <div className="overflow-hidden h-100"></div>
                    <div className="d-flex justify-content-between align-items-center p-1 border-bottom border-3 border-black" style={{ backgroundColor: jordy_blue }}>
                          {/*Logo and Name*/}
                          <div className="d-flex justify-content-between align-items-center">
                              <img className="img-fluid m-0 p-0 align-self-center" src="/logo.png" alt="Letter S Logo" style={{ width: '120px', height: '120px'}}></img>
                              <h1 className="pt-2 text-center ps-2" style={{marginInlineStart: ''}}><strong>Samuel Greig</strong></h1>
                          </div>
                          {/*Navbar*/}
                          {navbar_html}
                    </div>
                    <div id="selected_content" className="container p-5 my-5 border border-3 border-black bg-white">
                        {active_tab === 'home' && (
                            <>
                                <h2><strong>Home</strong></h2>
                                <hr></hr>
                                <p>Welcome to my site! This website was built using HTML, React, JSX, and Bootstrap.
                                    The goal of this project was to learn and better understand the React JavaScript framework and Bootstrap CSS library.<br></br><br></br>

                                    Feel free to explore this website to discover in-depth information on past projects, previous education history, and work history.
                                    Have fun exploring!
                                </p>
                            </>
                        )}
                        {active_tab === 'about' && (
                            <>
                                <h2><strong>About</strong></h2>
                                <hr></hr>
                                <p>
                                    Recent Computer Science graduate (2:1 BSc Hons) from the University of Strathclyde, with a strong foundation in full-stack development, cybersecurity, and software engineering.
                                    Skilled in building user- friendly, responsive web applications and gamified educational tools using technologies such as React, PHP, and GameMaker.
                                    Passionate about problem-solving, clean code, and building secure impactful software.
                                    Proven ability to work both independently and within agile teams.
                                </p>
                            </>
                        )}
                        {active_tab === 'projects' && (
                            <>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h2>Projects</h2>
                                    <div className="d-flex justify-content-between align-items-center">

                                        {/*Filter Button*/}
                                        <div className="btn-group">
                                            <button type="button" className="btn p-1 border border-2 dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                                Filter
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li><h6 className="dropdown-header"><strong>Project Theme</strong></h6></li>
                                                <li><hr className="dropdown-divider"></hr></li>
                                                <li>
                                                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded pe-0">
                                                        <label className="form-check-label mb-0 user-select-none" htmlFor="web_filter">
                                                            Web Development
                                                        </label>
                                                        <input className="form-check-input shadow-none focus-ring-0 m-0 mx-3" type="checkbox" name="web" checked={filters.web} onChange={handle_checkbox_change} id="web_filter"/>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded pe-0">
                                                        <label className="form-check-label mb-0 user-select-none" htmlFor="game_filter">
                                                            Game Development
                                                        </label>
                                                        <input className="form-check-input shadow-none focus-ring-0 m-0 mx-3" type="checkbox" name="game" checked={filters.game} onChange={handle_checkbox_change} id="game_filter"/>
                                                    </div>
                                                </li>
                                                {/*<li><hr className="dropdown-divider"></hr></li>*/}
                                                {/*<li><a className="dropdown-item" href="#">Separated link</a></li>*/}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                {/*Project containers*/}
                                <div className="d-flex flex-wrap gap-3 justify-content-start">
                                    {/*Portfolio Website Project Preview*/}
                                    {(filters.web || filter_off) && (
                                    <button className="d-flex flex-column align-items-start border rounded border-2 flex-grow-1 flex-shrink-1 project_item btn p-0"
                                            style={{ minWidth: "240px", flexBasis: "300px" }}
                                            onClick={() => {set_show_background(true); view_project('portfolio_website');}}>
                                        <div className="d-flex flex-column justify-content-between h-100 w-100">
                                            <div>
                                                <div className="d-flex flex-wrap justify-content-start mt-3 align-items-start" style={{ flexBasis: "50px" }}>
                                                    <p className="m-0 mx-3 rounded p-1 fw-bold web align-self-center">Web</p>
                                                    <h5 className="m-0 align-self-center text-wrap">
                                                        <span className="d-inline d-sm-inline">Portfolio</span>
                                                        <span className="d-block d-sm-inline"> Website</span>
                                                    </h5>
                                                </div>
                                                <hr className="p-0 m-0 mt-2 border-2" />
                                                <img src="images/portfolio/portfolio_website_homepage.webp" alt="Portfolio Website Homepage" className="img-fluid project"/>
                                                <hr className="p-0 m-0 border-2" />
                                                <p className="m-3 mt-2 text-start">Website designed to display project portfolio while learning React and Bootstrap</p>
                                            </div>

                                            <div className="d-flex flex-wrap gap-1 m-3 my-3 mt-0">
                                                <p className="m-0 rounded p-1 fw-bold align-self-center bg_cornflower_blue">React</p>
                                                <p className="m-0 rounded p-1 fw-bold align-self-center bg_cornflower_blue">Bootstrap</p>
                                                <p className="m-0 rounded p-1 fw-bold align-self-center bg_cornflower_blue">JavaScript</p>
                                                <p className="m-0 rounded p-1 fw-bold align-self-center bg_cornflower_blue">HTML</p>
                                                <p className="m-0 rounded p-1 fw-bold align-self-center bg_cornflower_blue">CSS</p>
                                            </div>
                                        </div>
                                    </button>
                                    )}

                                    {/*Secure Escape Project Preview*/}
                                    {(filters.game || filter_off) && (
                                        <button className="d-flex flex-column align-items-start border rounded border-2 flex-grow-1 flex-shrink-1 project_item btn p-0"
                                                style={{ minWidth: "240px", flexBasis: "300px" }}
                                                onClick={() => {set_show_background(true); view_project('secure_escape');}}>
                                            <div className="d-flex flex-column justify-content-between h-100 w-100">
                                                <div>
                                                    <div className="d-flex flex-wrap gap-1 justify-content-start mt-3 align-items-start" style={{ flexBasis: "50px" }}>
                                                        <p className="m-0 mx-3 rounded p-1 fw-bold game align-self-center">Game</p>
                                                        <h5 className="m-0 align-self-center text-wrap">
                                                            <span className="d-inline d-sm-inline">Secure</span>
                                                            <span className="d-block d-sm-inline"> Escape</span>
                                                        </h5>
                                                    </div>
                                                    <hr className="p-0 m-0 mt-2 border-2" />
                                                    <img src="images/secure_escape/secure_escape_main_room.webp" alt="Game Screenshot: Secure Escape" className="img-fluid" />
                                                    <hr className="p-0 m-0 border-2" />
                                                    <p className="m-3 mt-2 text-start">Teaching cyber security concepts through escape room minigames</p>
                                                </div>

                                                <div className="d-flex flex-wrap gap-1 m-3">
                                                    <p className="m-0 rounded p-1 fw-bold align-self-center bg_cornflower_blue">GML</p>
                                                </div>
                                            </div>
                                        </button>
                                    )}
                                    {/*Art Shop Project Preview*/}
                                    {(filters.web || filter_off) && (
                                        <button className="d-flex flex-column align-items-start border rounded border-2 flex-grow-1 flex-shrink-1 project_item btn p-0"
                                                style={{ minWidth: "240px", flexBasis: "300px" }}
                                                onClick={() => {set_show_background(true); view_project('caras_art_shop');}}>
                                            <div className="d-flex flex-column justify-content-between h-100 w-100">
                                                <div>
                                                    <div className="d-flex flex-wrap gap-1 justify-content-start mt-3 align-items-start" style={{ flexBasis: "50px" }}>
                                                        <p className="m-0 mx-3 rounded p-1 fw-bold web align-self-center">Web</p>
                                                        <h5 className="m-0 align-self-center text-wrap">
                                                            <span className="d-inline d-sm-inline">Cara's </span>
                                                            <span className="d-inline d-sm-inline">Art </span>
                                                            <span className="d-block d-sm-inline">Shop</span>
                                                        </h5>
                                                    </div>
                                                    <hr className="p-0 m-0 mt-2 border-2" />
                                                    <img src="images/caras_art_shop/caras_art_shop_homepage.webp" alt="Cara's Art Shop Store Page" className="img-fluid" />
                                                    <hr className="p-0 m-0 border-2" />
                                                    <p className="m-3 mt-2 text-start">An ecommerce website built to sell art for a hypothetical university client called Cara.</p>
                                                </div>

                                                <div className="d-flex flex-wrap gap-1 m-3">
                                                    <p className="m-0 rounded p-1 fw-bold align-self-center bg_cornflower_blue">HTML</p>
                                                    <p className="m-0 rounded p-1 fw-bold align-self-center bg_cornflower_blue">PHP</p>
                                                    <p className="m-0 rounded p-1 fw-bold align-self-center bg_cornflower_blue">SQL</p>
                                                </div>
                                            </div>
                                        </button>
                                    )}

                                    {/*Invisible Divs to Maintain Formatting/CSS for Visible Portfolio Items*/}
                                    <div className="border p-2 rounded border-2 flex-grow-1 flex-shrink-1 invisible"
                                         style={{maxWidth: "50%", minWidth: "240px", flexBasis: "300px"}}>
                                    </div>

                                    <div className="border p-2 rounded border-2 flex-grow-1 flex-shrink-1 invisible"
                                         style={{maxWidth: "50%", minWidth: "240px", flexBasis: "300px"}}>
                                    </div>
                                </div>

                            </>
                        )}
                        {active_tab === 'contact' && (
                            <>
                                <h2>Contact</h2>
                                <hr></hr>
                                {<ContactForm/>}
                            </>
                        )}
                    </div>
                </div>
                <div>
                    {/*Call View_Project function when a project button is clicked -> Displays Overlay of selected_project*/}
                    <View_Project show={show_background} close_overlay={() => set_show_background(false)} selected_project={selected_project}/>
                </div>
            </div>
        </>
  );
}
export default App;