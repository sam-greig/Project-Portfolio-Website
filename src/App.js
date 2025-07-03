import './App.css';
import React, {Fragment, useEffect, useState} from 'react';
import ContactForm from './Form.js'
import View_Project from "./View_Project";
import Navbar from "./Navbar";

//Globally Declared Colours
const jordy_blue = "#8babf1";
const link_water = "#d9e4ff";

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


    return (
        <>
            <div>
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
                                <p> Motivated and detail-oriented undergraduate computer science student with a strong foundation in programming and software development.
                                    Recently graduated with a 2:1 in BSc Hons Computer Science at the University of Strathclyde.
                                    Experienced in developing practical projects that blend creativity with technical expertise, such as a cybersecurity-themed video game.
                                    Passionate about problem-solving, coding, and creating impactful software solutions.
                                </p>
                            </>
                        )}
                        {active_tab === 'projects' && (
                            <>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h2>Projects</h2>
                                    <div className="d-flex justify-content-between align-items-center">
                                        {/*Sort Button*/}
                                        {/*<div className="">*/}
                                        {/*    <label htmlFor="sort" className="form-label">Sort By:</label>*/}
                                        {/*    <select name="sort" id="sort" className="mx-2 p-1 border rounded border-2">*/}
                                        {/*        <option value="Ascending">Ascending</option>*/}
                                        {/*        <option value="Descending">Descending</option>*/}
                                        {/*    </select>*/}
                                        {/*</div>*/}

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
                                                <li><hr className="dropdown-divider"></hr></li>
                                                <li><a className="dropdown-item" href="#">Separated link</a></li>
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
                                                    {/*<h5 className="m-0 me-1 p-0 align-self-center">Portfolio Website</h5>*/}
                                                    <h5 className="m-0 align-self-center text-wrap">
                                                        <span className="d-inline d-sm-inline">Portfolio</span>
                                                        <span className="d-block d-sm-inline"> Website</span>
                                                    </h5>
                                                </div>
                                                <hr className="p-0 m-0 mt-2 border-2" />
                                                <img src="images/portfolio_website.png" alt="Game Screenshot: Secure Escape" className="img-fluid" />
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
                                                    <img src="images/secure_escape.png" alt="Game Screenshot: Secure Escape" className="img-fluid" />
                                                    <hr className="p-0 m-0 border-2" />
                                                    <p className="m-3 mt-2 text-start">Teaching cyber security concepts through escape room minigames</p>
                                                </div>

                                                <div className="d-flex flex-wrap gap-1 m-3">
                                                    <p className="m-0 rounded p-1 fw-bold align-self-center bg_cornflower_blue">GML</p>
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