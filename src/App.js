import './App.css';
import React, {useEffect, useState} from 'react';

//Globally Declared Colours
const jordy_blue = "#8babf1";
const link_water = "#d9e4ff";

function Navbar() {
    const white = '#FFFFFF';
    const black = '#000000';
    const [active_tab, set_active_tab] = useState('home');

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
            {/*Education Button*/}
            <button className="pg-3 navbar-brand m-0 btn border-0"
                    onClick={() => set_active_tab('education')}
                    style={active_tab === 'education' ? {color: white} : {}}>
                <strong>Education</strong>
            </button>
            {/*Work Button*/}
            <button className="pg-3 navbar-brand m-0 btn disabled border-0"
                    onClick={() => set_active_tab('work')}
                    style={active_tab === 'work' ? {color: white} : {}}>
                <strong>Work</strong>
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

function View_Project({show, close_overlay, selected_project}) {
    useEffect(() => {
        //Disable/Enable background scrolling
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        //If component unmounts
        return () => {
            document.body.style.overflow = '';
        };
    }, [show]);

    if (!show) return null;

    return (
        <>
            <div>
                <div className="fade_background"></div>
                <div className="overlay border border-black border-2 rounded-3 overflow-auto">
                    {selected_project === 'portfolio_website' && (
                        <>
                            <p>hi</p>
                        </>
                    )}
                    {selected_project === 'secure_escape' && (
                        <>
                            <div className="d-flex justify-content-between position-sticky border-bottom border-2 border-black"
                                 style={{backgroundColor: jordy_blue}}>
                                <h1 className="p-4 mx-4"><strong>Secure Escape</strong></h1>
                                <button type="button" className="btn-close m-3" aria-label="Close" onClick={close_overlay}></button>
                            </div>
                            <div className="p-5 h-100"
                                 style={{backgroundColor: link_water}}>
                                <p>Ah I seeAh I seeAh I seeAh I seeAh I seeAh I seeAh I seeAh I seeAh I seeAh I see</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

function App() {
    document.body.style.backgroundColor = link_water;
    const {navbar_html, active_tab} = Navbar();
    const [show_background, set_show_background] = useState(false);
    const [selected_project, view_project] = useState('');


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
                                                        <input className="form-check-input shadow-none focus-ring-0 m-0 mx-3" type="checkbox" id="web_filter"/>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded pe-0">
                                                        <label className="form-check-label mb-0 user-select-none" htmlFor="game_filter">
                                                            Game Development
                                                        </label>
                                                        <input className="form-check-input shadow-none m-0 mx-3" type="checkbox" id="game_filter"/>
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
                                    <button className="d-flex flex-column align-items-start border rounded border-2 flex-grow-1 flex-shrink-1 project_item btn p-0"
                                            style={{ minWidth: "240px", flexBasis: "300px" }}
                                            onClick={() => {set_show_background(true); view_project('portfolio_website');}}>
                                        <div className="d-flex flex-column justify-content-between h-100 w-100">
                                            <div>
                                                <div className="d-flex flex-wrap gap-1 justify-content-start mt-3 align-items-start" style={{ flexBasis: "50px" }}>
                                                    <p className="m-0 mx-3 rounded p-1 fw-bold web align-self-center">Web</p>
                                                    <h5 className="m-0 align-self-center">Portfolio Website</h5>
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

                                    {/*Secure Escape Project Preview*/}
                                    <button className="d-flex flex-column align-items-start border rounded border-2 flex-grow-1 flex-shrink-1 project_item btn p-0"
                                            style={{ minWidth: "240px", flexBasis: "300px" }}
                                            onClick={() => {set_show_background(true); view_project('secure_escape');}}>
                                        <div className="d-flex flex-column justify-content-between h-100 w-100">
                                            <div>
                                                <div className="d-flex flex-wrap gap-1 justify-content-start mt-3 align-items-start" style={{ flexBasis: "50px" }}>
                                                    <p className="m-0 mx-3 rounded p-1 fw-bold game align-self-center">Game</p>
                                                    <h5 className="m-0 align-self-center">Secure Escape</h5>
                                                </div>
                                                <hr className="p-0 m-0 mt-2 border-2" />
                                                <img src="images/secure_escape.png" alt="Game Screenshot: Secure Escape" className="img-fluid" />
                                                <hr className="p-0 m-0 border-2" />
                                                <p className="m-3 mt-2 text-start">Teaching cyber security concepts through escape room minigames</p>
                                            </div>

                                            <div className="d-flex flex-wrap gap-1 m-3">
                                                <p className="m-0 rounded p-1 fw-bold align-self-center bg_cornflower_blue">GML</p>
                                                {/*<p className="m-0 mt-1 border border-black border-1 rounded p-1 fw-bold gamemaker">GameMaker</p>*/}
                                                {/*<p className="m-0 mt-2 border border-black border-1 rounded p-1 fw-bold">OOP</p>*/}
                                            </div>
                                        </div>
                                    </button>

                                    <div className="border p-2 rounded border-2 flex-grow-1 flex-shrink-1 invisible"
                                         style={{maxWidth: "50%", minWidth: "240px", flexBasis: "300px"}}>
                                    </div>

                                    <div className="border p-2 rounded border-2 flex-grow-1 flex-shrink-1 invisible"
                                         style={{maxWidth: "50%", minWidth: "240px", flexBasis: "300px"}}>
                                    </div>
                                </div>

                            </>
                        )}
                        {active_tab === 'education' && (
                            <>
                                <h2>Education</h2>
                                <hr></hr>
                                <p></p>
                            </>
                        )}
                        {active_tab === 'work' && (
                            <>
                                <h2>Work</h2>
                                <hr></hr>
                                <p></p>
                            </>
                        )}
                    </div>
                </div>
                <div>
                    <View_Project show={show_background} close_overlay={() => set_show_background(false)} selected_project={selected_project}/>
                </div>
            </div>
        </>
  );
}

export default App;