import React from 'react';
import './about.css'
import Picture from '../../assets/img/p2.jpg'
import '../../App.css'
import resume from '../../assets/pdf/Resume.pdf'

const About = () => {
    function handlePrint(e) {
        e.preventDefault()
        window.open(resume, 'OPEN')
    }

    return (
        <div className='about_container' id='about'>
            <div className='about_text'>
                    <div className="about-right-content tilt-in-top-1">
                        <h5 className="about-sub-title">
                            about me
                        </h5>
                        <h2 className="about-title">
                            Hi there, I’m Victoria
                        </h2>
                        <h5 className="about-title-3">
                            Software Engineer based in Seattle, USA
                        </h5>
                        <div className="about-txt mb-30">
                            <p>
                                I'm a Full stack software engineer solving the problems using technology power with background in nanotechnologies, programming and civil engineering🖥️

                            </p>
                            <p className="mb-0">
                                Tools I fall back to when tackling a problem are:
                                JavaScript, React.js, Typescript, Next.js, Nest.js, Redux, Redux Toolkit, MobX,  PostgreSQL, Mongoose, MongoDB, Express, Node.js, Git, Webpack, Heroku, Vercel, Netlify,  HTML5, CSS3, SCSS, Bootstrap, Material UI, Figma
                            </p>
                        </div>

                        <div className="about-btn">
                            <a href={resume}
                               download='resume'
                               target='_blank'
                               rel="noreferrer"
                            >
                                <button className='about-buttons'
                                >Download CV
                                </button>
                            </a>

                            <button className='about-buttons_print'
                                    onClick={handlePrint}
                            >Print CV
                            </button>
                        </div>
                    </div>
            </div>
            <div className='about_img'>
               <img src={Picture} alt={'pic'}/>
            </div>
        </div>
    );
};

export default About;
