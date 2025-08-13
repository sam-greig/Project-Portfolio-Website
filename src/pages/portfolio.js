import React from "react";

const portfolio_page = () => {
    return(
    <>
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
                                tool by <a href="https://venngage.com/tools/accessible-color-palette-generator" target="_blank" rel="noreferrer noopener" className={"text-decoration-none"}>Venngage</a>.
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
                        <div className="col-12 col-md-6">
                            <p>
                                The next core step for the design phase of this project is to produce wireframes.
                                This aims to simplify, and speed up the development process by avoiding delays due
                                to constant front-end considerations and changes. The wireframes for this project were
                                produced in <a href="https://figma.com" target="_blank" rel="noreferrer noopener" className={"text-decoration-none"}>Figma</a>.
                            </p>
                        </div>
                    </div>
                    <p className={"m-0"}><strong>Sprint Plan</strong></p>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>
                                This project was conducted in weekly sprints, planned out using <a href="https://www.atlassian.com/software/jira" target="_blank" rel="noreferrer noopener" className={"text-decoration-none"}>Jira</a>.
                                This allowed the project to be split up into tasks or goals and plan out each week to avoid wasting time and resources.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center flex-column">
                            <img src="https://i.imgur.com/cz5tQ5t.png"
                                 alt="Jira tasks for portfolio project"
                                 className="border border-2 border-black p-1 rounded img-fluid"/>
                            <p className="text-center mt-2">Jira Project Backlog</p>
                        </div>
                    </div>
                </div>

                <h2><strong>Development</strong></h2>
                <hr></hr>
                <div className="m-0">
                    <p className={"m-0"}><strong>Timeline</strong></p>
                    <div className="row">
                        <div>
                            <p>
                                The project started on June 1st 2025 with core development concluding on July 11th 2025.
                                This meant there were six sprints in total each focusing on a specific part of this project.
                            </p>
                            <ol>
                                <li>The first sprint focused on designing the main content for the website and gaining a better understanding of React and Bootstrap.</li>
                                <li>Sprint two implemented the homepage while also setting up the project.</li>
                                <li>
                                    The third sprint was trying to implement the navbar whilst also having it adapt for different screen sizes.
                                    This meant depending on the screen size one of three variants of the navbar is displayed.
                                </li>
                                <li>Sprint four set up the project page where some important features were implemented.</li>
                                    <ul>
                                        <li>Filter Projects</li>
                                        <li>Pop-up Overlay</li>
                                        <li>Project Containers</li>
                                    </ul>
                                <li>The fifth sprint focused on setting up the project pop-up overlay (custom made image scroller and formatting), and project file restructuring to help with maintainability.</li>
                                <li>
                                    The final sprint implemented the contact page.
                                    This involved researching and finding an email API called <a href="https://www.emailjs.com/" target="_blank" rel="noreferrer noopener" className={"text-decoration-none"}>EmailJS</a> that connects with the contact form to automatically send an email with the form's content.
                                    Although it is very important to restrict what content is accepted into a form.
                                    This meant that every field had to be validated and/or sanitised with specific requirements and regex.
                                </li>
                            </ol>
                        </div>
                    </div>
                    <p className={"m-0"}><strong>Struggles</strong></p>
                    <p>
                        There was one main issue that arose during the development of this project.
                        This was discovered whilst learning about environment variables and understanding the importance of hiding them.
                        Unfortunately, EmailJS is a frontend API and I discovered that you can't hide these keys, only obfuscate them.
                        During this development process I explored a basic understanding of a serverless backend website where environment variables can be hidden using Node.js and Express.js.
                        This allowed me to discover a serverless hosting website called <a href="https://vercel.com/" target="_blank" rel="noreferrer noopener" className={"text-decoration-none"}>Vercel</a> which I hosted a <a href="https://github.com/sam-greig/portfolio_website_backend" target="_blank" rel="noreferrer noopener" className={"text-decoration-none"}>backend</a> for this project.
                        Sadly this is currently not linked to the site but will most likely be used in the future with a backend email API service like <a href="https://nodemailer.com/" target="_blank" rel="noreferrer noopener" className={"text-decoration-none"}>Nodemailer</a>.
                    </p>
                </div>
                <h2><strong>Testing</strong></h2>
                <hr></hr>
                <div className="m-0">
                    <p>
                        Thorough testing was conducted during each stage of the development process.
                        This involved integration testing to ensure no prior elements were affected when new features were implemented.
                        Furthermore, the inbuilt developers tools allowed console.log testing to be conducted whilst also utilising the ability to change the screen width and height to ensure page adaptability.
                    </p>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <p>
                                Although this approach did not feel enough to cover testing user interaction and edge cases.
                                I wanted to find something that allowed unit testing similar to Javas JUnit, this allowed me to discover  <a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank" rel="noreferrer noopener" className={"text-decoration-none"}>React-Testing-Library</a> and <a href="https://jestjs.io/" target="_blank" rel="noreferrer noopener" className={"text-decoration-none"}>Jest</a>.
                                <br></br>
                                These libraries allowed me to simulate user interaction and see if the website responded as intended.
                                The first set of unit tests made sure that the navbar buttons switch and rendered the correct content.
                                Another notable test I explored was simulating a user sending an email on the contact page.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center flex-column">
                            <img src="images/portfolio/portfolio_website_test_cases.webp"
                                 alt="Unit tests"
                                 className="border border-2 border-black p-1 rounded img-fluid"/>
                            <p className="text-center mt-2">Portfolio Unit Tests</p>
                        </div>
                    </div>
                </div>
                <h2><strong>Reflection</strong></h2>
                <hr></hr>
                <div className="m-0">
                    <p>
                        This project caused me to learn a lot while using the React library.
                        React allowed this website to render and display content depending on what the user does on the site.
                        Meanwhile, Bootstrap simplified the CSS of the site by using standardised classes allowing the website to be fluid, adapting to different screen sizes.
                        This project also allowed a foundational understanding into the React testing libraries available.
                        Using this tech stack to develop a web application was an enjoyable experience and will definitely be something I use again in the future.
                    </p>
                    <p>
                        For future development, the plan is to continually maintain and update this site by adding past and future projects.
                        One feature I would change would be that the contact form could be switched to call to a backend API to send emails and reCAPTCHA may be implemented for bot protection.
                        A new feature I would like to implement would be utilising local storage to remember where the user has visited upon refresh.
                    </p>
                </div>
                <h2><strong>Resources</strong></h2>
                <hr></hr>
                <div className={""}>
                    <h6><strong>React</strong></h6>
                    <ul>
                        <li><a href={"https://www.w3schools.com/react/default.asp"} target={"_blank"} rel="noreferrer noopener" className={"text-break"}>https://www.w3schools.com/react/default.asp</a></li>
                        <li><a href={"https://testing-library.com/docs/react-testing-library/intro/"} target={"_blank"} rel="noreferrer noopener" className={"text-break"}>https://testing-library.com/docs/react-testing-library/intro/</a></li>
                    </ul>
                </div>
                <div className={""}>
                    <h6><strong>Bootstrap</strong></h6>
                    <ul>
                        <li><a href={"https://bootstrap-cheatsheet.themeselection.com/"} target={"_blank"} rel="noreferrer noopener" className={"text-break"}>https://bootstrap-cheatsheet.themeselection.com/</a></li>
                        <li><a href={"https://www.w3schools.com/bootstrap5/index.php"} target={"_blank"} rel="noreferrer noopener" className={"text-break"}>https://www.w3schools.com/bootstrap5/index.php</a></li>
                    </ul>
                </div>
                <div className={""}>
                    <h6><strong>Hosting</strong></h6>
                    <ul>
                        <li><a href={"https://pages.github.com/"} target={"_blank"} rel="noreferrer noopener" className={"text-break"}>https://pages.github.com/</a></li>
                        <li><a href={"https://github.com/gitname/react-gh-pages"} target={"_blank"} rel="noreferrer noopener" className={"text-break"}>https://github.com/gitname/react-gh-pages</a></li>
                        <li><a href={"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages"} target={"_blank"} rel="noreferrer noopener" className={"text-break"}>https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages</a></li>
                        <li><a href={"https://medium.com/@md.alishanali/how-to-deploy-your-node-js-backend-project-to-vercel-a-step-by-step-guide-f92133c3b5e2"} target={"_blank"} rel="noreferrer noopener" className={"text-break"}>https://medium.com/@md.alishanali/how-to-deploy-your-node-js-backend-project-to-vercel-a-step-by-step-guide-f92133c3b5e2</a></li>
                        <li><a href={"https://vercel.com/guides/using-express-with-vercel"} target={"_blank"} rel="noreferrer noopener" className={"text-break"}>https://vercel.com/guides/using-express-with-vercel</a></li>
                        <li><a href={"https://expressjs.com/en/guide/routing.html"} target={"_blank"} rel="noreferrer noopener" className={"text-break"}>https://expressjs.com/en/guide/routing.html</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>)
}

export default portfolio_page();