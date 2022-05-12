import React from 'react';
import './one_project.css'
import {socialsData} from '../../data/socialsData';
const OneProject = (props) => {
    return (
        <div className='one_project_container'>
            <div className='content'>
                <img src={props.img} alt='project'/>
            </div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div className="project-btn">
                <a
                    href={props.webLink}
                    target='_blank'
                    rel="noreferrer"
                >
                <button className='project_web' >Life View
                </button>
                </a>
                <a
                    href={socialsData.github}
                    target='_blank'
                    rel="noreferrer"
                >
                <button className='project_info' >Info
                </button>
                </a>
            </div>
        </div>
    );
};

export default OneProject;
