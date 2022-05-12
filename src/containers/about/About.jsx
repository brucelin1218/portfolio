import React from 'react';
import './about.module.css'
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
                                Eeniam possimus magni quia posuere praesentium laboriosam laudantium laborum quam
                                dignissim nihil fugiat cursus, elementum deleniti molestiae assumenda. Lste voluptatibus
                                nascetur luctus vitae quam.
                            </p>
                            <p className="mb-0">
                                Dignissimos nobis dignissim tristique, sequi occaecat cum auctor facilis interdum
                                torquent pulvinar tenetur tempor ibendum quod.
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
