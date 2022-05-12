import React from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css'

import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'

function Skills() {



    return (
        <div id ="skills" className="skills" >
                <h5 className="sub-title">
                    technologies and skills
                </h5>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} >
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 >
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills
