import React, {useEffect, useState} from "react";
import images from "../data/images";
import {jordy_blue, link_water} from "../data/colour_palette";
import portfolio from "../pages/portfolio"
import secure_escape from "../pages/secure_escape";

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

    const under_development = (
      <>
          <div className="m-5 m-sm-4 mb-0 bg-white border border-2 border-black rounded remove_margin">
              <div className="m-4">
                  <h2><strong>Page Under Construction</strong></h2>
                  <hr></hr>
                  <p>The content of this page is not quite ready yet!</p>
              </div>
          </div>
      </>
    );

    const page_data = {
        portfolio_website: [
            {
                title: "Portfolio Website",
                github: "https://github.com/sam-greig/Project-Portfolio-Website",
                live: ""
            }
        ],
        secure_escape: [
            {
                title: "Secure Escape",
                github: "https://github.com/sam-greig/secure_escape",
                live: ""
            }
        ],
        art_shop: [
            {
                title: "Art Shop",
                github: "",
                live: ""
            }
        ]
    };

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
                <div className="overlay border border-black border-2 rounded-3 overflow-auto" style={{backgroundColor: link_water}}>
                    {/*Close Button*/}
                    <button type="button" className="btn-close m-3" aria-label="Close" onClick={close_overlay}
                            style={{position: 'fixed', top: '1rem', right: '1rem', zIndex: 10, backgroundColor: "#FFFFFF"}}>
                    </button>
                    {/*Overlay Page Title*/}
                    <div className="d-flex justify-content-between position-sticky border-bottom border-2 border-black"
                         style={{backgroundColor: jordy_blue}}>
                        <h1 className="p-4 mx-4"><strong>{page_data[selected_project][0].title}</strong></h1>
                    </div>
                    {/*Image Scroller*/}
                    {ImageScroller}
                    {/*Beginning of "Body"*/}
                    <div className="p-0 pb-2 m-0 h-auto">
                    {/*GitHub and Live Links*/}
                    <div className="d-flex justify-content-end pb-2 pt-2 me-4 gap-2 align-items-stretch">
                        {page_data[selected_project][0].github.localeCompare("") === 1 && (
                            <a target="_blank" href={page_data[selected_project][0].github}
                               className={"p-0 m-0 border border-black border-2 d-flex justify-content-center align-items-center bg-white"}
                               style={{ height: "60px", width: "60px" }}>
                                <img src={"images/github_logo.jpg"} alt="GitHub Logo"
                                     style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}/>
                            </a>
                        )}
                        {page_data[selected_project][0].live.localeCompare("") === 1 && (
                            <a target="_blank" href={page_data[selected_project][0].live}
                               className={"p-0 m-0 border border-black border-2 d-flex justify-content-center align-items-center bg-white"}
                               style={{ height: "60px", width: "60px" }}>
                                <img src={"images/deployed_logo.png"} alt="Deployment Logo"
                                     style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}/>
                            </a>
                        )}
                    </div>
                    {selected_project === 'portfolio_website' && (
                        <>
                            {portfolio}
                            {/*{under_development}*/}
                        </>
                    )}
                    {selected_project === 'secure_escape' && (
                        <>
                            {/*{secure_escape}*/}
                            {under_development}
                        </>
                    )}
                    {selected_project === 'art_shop' && (
                        <>
                            {under_development}
                        </>
                    )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default View_Project;