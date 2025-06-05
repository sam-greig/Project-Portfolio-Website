import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
    const jordy_blue = "#8babf1";
    const link_water = "#d9e4ff";
    const pale_cornflower_blue = "#b3c7f7";
    const light_steel_blue = "#7F93C3";
    const white = '#FFFFFF';
    document.body.style.backgroundColor = link_water;
    const [activeTab, setActiveTab] = useState('home');
  return (
      <div>
            <div className="container-fluid p-5 text-black text-center" style={{backgroundColor: jordy_blue}}>
                <h1><strong>Samuel Logan Greig</strong></h1>
            </div>
            <div className="container-fluid p-0 m-0 border border-black border-2">
                <nav className="navbar navbar-expand-xl navbar-light p-0 m-0 " style={{backgroundColor: pale_cornflower_blue}}>
                    <div className="row p-0 m-0">
                        <button className="col-sm-auto pg-3 navbar-brand border-2 border-black border-top-0 border-start-0 border-bottom-0 m-0 btn rounded-0" onClick={() => setActiveTab('home')} style={activeTab === 'home' ? {backgroundColor: light_steel_blue} : {}}>
                            <img src="/house.svg" alt="Home button" className="img-fluid" style={{ width: '40px', height: '40px' }} />
                        </button>
                        <button className="col-sm-auto pg-3 navbar-brand border-2 border-black border-top-0 border-start-0 border-bottom-0 m-0 btn rounded-0"
                                onClick={() => setActiveTab('about')}
                                style={activeTab === 'about' ? {backgroundColor: light_steel_blue, color: white} : {}}>
                                {activeTab === 'about' ? <strong>About</strong> : 'About'}
                        </button>
                        <button className="col-sm-auto pg-3 navbar-brand border-2 border-black border-top-0 border-start-0 border-bottom-0 m-0 btn rounded-0"
                                onClick={() => setActiveTab('projects')}
                                style={activeTab === 'projects' ? {backgroundColor: light_steel_blue, color: white} : {}}>
                                {activeTab === 'projects' ? <strong>Projects</strong> : 'Projects'}
                        </button>
                        <button className="col-sm-auto pg-3 navbar-brand border-2 border-black border-top-0 border-start-0 border-bottom-0 m-0 btn rounded-0"
                                onClick={() => setActiveTab('education')}
                                style={activeTab === 'education' ? {backgroundColor: light_steel_blue, color: white} : {}}>
                                {activeTab === 'education' ? <strong>Education</strong> : 'Education'}
                        </button>
                    </div>
                </nav>
            </div>
            <div id="selected_content" className="container p-5 my-5 border border-2 border-black bg-white">
                {activeTab === 'home' && (
                    <>
                        <h2>About</h2>
                        <div>🏠 This is the Home page.</div>
                    </>
                )}
                {activeTab === 'about' && (
                    <>
                    <h2>About</h2>
                        <p>Motivated and detail-oriented undergraduate computer science student with a strong foundation in programming and software development. Currently graduating with a BSc Hons Computer Science at the University of Strathclyde with a predicted 2:1. Experienced in developing practical projects that blend creativity with technical expertise, such as a cybersecurity-themed video game. Passionate about problem-solving, coding, and creating impactful software solutions.</p>
                    </>
                )}
                {activeTab === 'projects' && (
                    <>
                        <h2>About</h2>
                        <div>🏠 This is the Home page.</div>
                    </>
                )}
                {activeTab === 'education' && (
                    <>
                        <h2>About</h2>
                        <div>🏠 This is the Home page.</div>
                    </>
                )}



                {/*{activeTab === 'about' && <div>ℹ️ About me content here.</div>}*/}
                {/*{activeTab === 'projects' && <div>📂 List of projects goes here.</div>}*/}
                {/*{activeTab === 'education' && <div>🎓 Education details here.</div>}*/}
            </div>


            {/*<div id="root3" class="container p-5 my-5 border">*/}
            {/*<h1>My First Bootstrap Page</h1>*/}
            {/*<p>This part is inside a .container class.</p>*/}
            {/*<p>The .container class provides a responsive fixed width container.</p>*/}
            {/*<div class="row">*/}
            {/*    <div class="col-sm-3 p-3 bg-primary text-white">.col</div>*/}
            {/*    <div class="col-sm-3 p-3 bg-dark text-white">.col</div>*/}
            {/*    <div class="col-sm-3 p-3 bg-primary text-white">.col</div>*/}
            {/*    <div class="col-sm-3 p-3 bg-dark text-white">.colll</div>*/}
            {/*</div>*/}
            {/*</div>*/}
      </div>
      // <div className="App">
      //     <header></header>
      //     <nav></nav>
      //
      //   {/*<header className="App-header">*/}
      //     <p>{my_car.present()}</p>
      //     <p>{my_car2.show()}</p>
      //   {/*</header>*/}
      //     <footer></footer>
      // </div>
  );
}

export default App;




