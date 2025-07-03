import React, {useEffect, useState} from "react";
import images from "./data/images";

const jordy_blue = "#8babf1";
const link_water = "#d9e4ff";

function View_Project({show, close_overlay, selected_project}) {

    const [image_index, set_image_index] = useState(0);
    const [fade, set_fade] = useState(true);
    const update_image = (forward) => {
        //Start Fading
        set_fade(false);
        //Wait 200 milliseconds (0.2s)
        setTimeout(() => {
            //Update Image Index depending on if forward or backward button is clicked
            set_image_index(prev =>
                forward ? (prev + 1) % images[selected_project].length : (prev - 1 + images[selected_project].length) % images[selected_project].length
            );
            //Finish fade
            set_fade(true);
        }, 200);
    };

    const SVGLeftArrow = (props) => (
        <svg stroke="#000000"
             fill="#FFFFFF"
             strokeWidth="10"
             viewBox="0 0 512 512"
            // height="200px"
            // width="200px"
             xmlns="http://www.w3.org/2000/svg"
             {...props}>
            <path d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"/>
        </svg>
    );

    const SVGRightArrow = (props) => (
        <svg stroke="#000000"
             fill="#FFFFFF"
             strokeWidth="10"
             viewBox="0 0 512 512"
            // height="200px"
            // width="200px"
             xmlns="http://www.w3.org/2000/svg"
             {...props}>
            <path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"/>
        </svg>
    );

    const ImageScroller = (
        <>
            <div className="p-0 text-center bg-black py-2 d-flex justify-content-center align-self-center">
                <div className="position-relative d-flex justify-content-center align-items-center" style={{ maxWidth: '480px' }}>
                    <button className={"btn position-absolute border-0 "}
                            style={{ left: '1%', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
                            onClick={() => update_image(false)}>
                        <SVGLeftArrow width="50px" height="40px" style={{filter: "drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.4))"}}/>
                    </button>
                    {/*Display current selected image*/}
                    {images[selected_project] && images[selected_project][image_index] && (
                        <div className={'image-container' + (!fade ? ' fade-out' : '')} style={{ width: '100%' }}>
                            <img
                                src={images[selected_project][image_index].img_src}
                                alt={images[selected_project][image_index].img_alt}
                                className="h-100 w-100 border border-2 border-black"
                            />
                        </div>
                    )}

                    {/*<button className={"btn position-absolute border-0 " + ((images[selected_project].length > 1) ? '' : 'invisible')}*/}
                    <button className={"btn position-absolute border-0 "}
                            style={{ right: '1%', top: '50%', transform: 'translateY(-50%)', zIndex: 1, outline: 'none', boxShadow: 'none'}}
                            onClick={() => update_image(true)}>
                        <SVGRightArrow width="50px" height="40px" style={{filter: "drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.4))"}}/>
                    </button>
                    {/*Create a box for each image*/}
                    {images[selected_project] && images[selected_project][image_index] && (
                        <div className={"position-absolute d-flex gap-2 "}
                             style={{bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 2}}                                        >
                            {images[selected_project].map((_, index) => (
                                <div key={index} style={{width: '12px', height: '12px', backgroundColor: index === image_index ? '#000000' : '#FFFFFF', borderRadius: '12px', transition: 'background-color 0.3s'}}/>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );

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
                    {/*<button type="button" className="btn-close m-3 position-sticky" aria-label="Close" onClick={close_overlay}></button>*/}
                    <button type="button" className="btn-close m-3" aria-label="Close" onClick={close_overlay}
                            style={{position: 'fixed', top: '1rem', right: '1rem', zIndex: 10, backgroundColor: "#FFFFFF"}}>
                    </button>
                    {selected_project === 'portfolio_website' && (
                        <>
                            <div className="d-flex justify-content-between position-sticky border-bottom border-2 border-black"
                                 style={{backgroundColor: jordy_blue}}>
                                <h1 className="p-4 mx-4"><strong>Portfolio Website</strong></h1>
                            </div>
                            <div className="p-0 pb-2 pt-4 m-0 h-auto"
                                 style={{backgroundColor: link_water}}>
                                {/*Image Scroller*/}
                                {ImageScroller}

                                <div className="m-5 m-sm-4 mb-0 bg-white border border-2 border-black rounded remove_margin">
                                    <div className="m-4">
                                        <h2><strong>Aims & Objectives</strong></h2>
                                        <hr></hr>
                                        <div className="m-0">
                                            <p>This project aimed to build a web application to display prior and future projects, while also learning React and Bootstrap.</p>
                                            <p className="m-0">At the start of this project there were <strong>three</strong> core objectives for the outcome of this site:</p>
                                            <ol className="">
                                                <li>Web application must be suitable for all screen sizes</li>
                                                <li>Web application will only use one webpage</li>
                                                <li>Web application should be well-structured and documented to allow maintainability</li>
                                            </ol>
                                        </div>
                                        <h2><strong>Planning & Design</strong></h2>
                                        <hr></hr>
                                        <div className="m-0">
                                            <p className="m-0"><strong>Conceptualisation</strong></p>
                                            <div className="row">
                                                <div className="col-12 col-md-6">
                                                    <p>
                                                        One of the first stages for front-end web development is establishing a colour palette
                                                        that can be used throughout the application. An appropriate step in this process is
                                                        considering colour accessibility, which is why I used an accessible colour palette generator
                                                        tool by <a href="https://venngage.com/tools/accessible-color-palette-generator" target="_blank" className={"text-decoration-none"}>Venngage</a>.
                                                    </p>
                                                </div>
                                                <div className="col-12 col-md-6 align-self-center">
                                                    <img src="https://i.imgur.com/e0Bx4NC.png"
                                                         alt="Core Colour Palette"
                                                         className="border border-2 border-black p-1 rounded img-fluid"/>
                                                    <p className="text-center mt-2">Core Colour Palette</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center flex-column">
                                                    <img src="https://i.imgur.com/wdGXJ3O.png"
                                                         alt="Home Page Wireframe"
                                                         className="border border-2 border-black p-1 rounded img-fluid"/>
                                                    <p className="text-center mt-2">Home Page Wireframe</p>
                                                </div>
                                                <div className="col-12 col-md-6 align-self-center">
                                                    <p>
                                                        The next core step for the design phase of this project is to produce wireframes.
                                                        This aims to simplify, and speed up the development process by avoiding delays due
                                                        to constant front-end considerations and changes. The wireframes for this project were
                                                        produced in <a href="https://figma.com" target="_blank" className={"text-decoration-none"}>Figma</a>.
                                                    </p>
                                                </div>
                                            </div>
                                            <p><strong>Sprint Plan</strong></p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                                        </div>


                                        <h2><strong>Development</strong></h2>
                                        <hr></hr>
                                        <div className="m-0">
                                            <p><strong>Timeline</strong></p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                                            <p><strong>Features</strong></p>
                                            <p>Lorem ipsum dolor sit amet cog></p>
                                            <p><strong>Struggles</strong></p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                                        </div>
                                        <h2><strong>Testing</strong></h2>
                                        <hr></hr>
                                        <div className="m-0">
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                                        </div>
                                        <h2><strong>Resources</strong></h2>
                                        <hr></hr>
                                        <div className="m-0">
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                                        </div>
                                        <h2><strong>Reflection</strong></h2>
                                        <hr></hr>
                                        <div className="m-0">
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {selected_project === 'secure_escape' && (
                        <>
                            <div className="d-flex justify-content-between position-sticky border-bottom border-2 border-black"
                                 style={{backgroundColor: jordy_blue}}>
                                <h1 className="p-4 mx-4"><strong>Secure Escape</strong></h1>
                            </div>
                            <div className="p-0 pb-2 pt-4 m-0 h-auto"
                                 style={{backgroundColor: link_water}}>
                                {/*Image Scroller*/}
                                {ImageScroller}

                                <div className="m-5 m-sm-4 mb-0 bg-white border border-2 border-black rounded remove_margin">
                                    <div className="m-4">
                                        <h2><strong>Aims & Objectives</strong></h2>
                                        <hr></hr>
                                        <div className="m-0">
                                            <p>This project aimed to build a web application to display prior and future projects, while also learning React and Bootstrap.</p>
                                            <p className="m-0">At the start of this project there were <strong>three</strong> core objectives for the outcome of this site:</p>
                                            <ol className="">
                                                <li>Web application must be suitable for all screen sizes</li>
                                                <li>Web application will only use one webpage</li>
                                                <li>Web application should be well-structured and documented to allow maintainability</li>
                                            </ol>
                                        </div>
                                        <h2><strong>Planning & Design</strong></h2>
                                        <hr></hr>
                                        <div className="m-0">
                                            <p className="m-0"><strong>Conceptualisation</strong></p>
                                            <div className="row">
                                                <div className="col-12 col-md-6">
                                                    <p>
                                                        One of the first stages for front-end web development is establishing a colour palette
                                                        that can be used throughout the application. An appropriate step in this process is
                                                        considering colour accessibility, which is why I used an accessible colour palette generator
                                                        tool by <a href="https://venngage.com/tools/accessible-color-palette-generator" target="_blank" className={"text-decoration-none"}>Venngage</a>.
                                                    </p>
                                                </div>
                                                <div className="col-12 col-md-6 align-self-center">
                                                    <img src="https://i.imgur.com/e0Bx4NC.png"
                                                         alt="Core Colour Palette"
                                                         className="border border-2 border-black p-1 rounded img-fluid"/>
                                                    <p className="text-center mt-2">Core Colour Palette</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center flex-column">
                                                    <img src="https://i.imgur.com/wdGXJ3O.png"
                                                         alt="Home Page Wireframe"
                                                         className="border border-2 border-black p-1 rounded img-fluid"/>
                                                    <p className="text-center mt-2">Home Page Wireframe</p>
                                                </div>

                                                <div className="col-12 col-md-6 align-self-center">
                                                    <p>
                                                        The next core step for the design phase of this project is to produce wireframes.
                                                        This aims to simplify, and speed up the development process by avoiding delays due
                                                        to constant front-end considerations and changes. The wireframes for this project were
                                                        produced in <a href="https://figma.com" target="_blank" className={"text-decoration-none"}>Figma</a>.
                                                    </p>
                                                </div>
                                            </div>
                                            <p><strong>Sprint Plan</strong></p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                                        </div>


                                        <h2><strong>Development</strong></h2>
                                        <hr></hr>
                                        <div className="m-0">
                                            <p><strong>Timeline</strong></p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                                            <p><strong>Features</strong></p>
                                            <p>Lorem ipsum dolor sit amet cog></p>
                                            <p><strong>Struggles</strong></p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                                        </div>
                                        <h2><strong>Testing</strong></h2>
                                        <hr></hr>
                                        <div className="m-0">
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                                        </div>
                                        <h2><strong>Resources</strong></h2>
                                        <hr></hr>
                                        <div className="m-0">
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                                        </div>
                                        <h2><strong>Reflection</strong></h2>
                                        <hr></hr>
                                        <div className="m-0">
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default View_Project;