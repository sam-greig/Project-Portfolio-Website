import './App.css';
import React, {useState} from 'react';



function Navbar() {
    const jordy_blue = "#8babf1";
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

function App() {
    const jordy_blue = "#8babf1";
    const link_water = "#d9e4ff";
    document.body.style.backgroundColor = link_water;
    const {navbar_html, active_tab} = Navbar();

    return (
        <div>
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
                        <br></br>
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
                        <br></br>
                        <h3 className="text-decoration-underline">Background</h3>
                        <p>Hi</p>
                        <br></br>
                        <h3 className="text-decoration-underline">Background</h3>
                        <p>Motivated and detail-oriented undergraduate computer science student with a strong foundation in programming and software development. Currently graduating with a BSc Hons Computer Science at the University of Strathclyde with a predicted 2:1. Experienced in developing practical projects that blend creativity with technical expertise, such as a cybersecurity-themed video game. Passionate about problem-solving, coding, and creating impactful software solutions.</p>
                    </>
                )}
                {active_tab === 'projects' && (
                    <>
                        <h2>About</h2>
                        <div>🏠 This is the Home page.</div>
                    </>
                )}
                {active_tab === 'education' && (
                    <>
                        <h2>About</h2>
                        <div>🏠 This is the Home page.</div>
                    </>
                )}
                {active_tab === 'work' && (
                    <>
                        <h2>About</h2>
                        <div>🏠 This is the Home page.</div>
                    </>
                )}
            </div>
        </div>
  );
}

export default App;