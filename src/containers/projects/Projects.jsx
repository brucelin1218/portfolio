import React from 'react';
import './Projects.css'
import Union from '../../assets/projects/union.png'
import Cloud from '../../assets/projects/bc2.png'
import OneProject from '../../components/OneProject/OneProject';
import {projectData} from '../../data/socialsData';

const Projects = () => {
    return (
        <div className='project_main_container' id ="projects">
            <h5 className="project_container_sub-title">
                Projects
            </h5>
            <div className='project_container'>

                <OneProject img={Union}
                            title={'Union'}
                            description={projectData.unionDesc}
                            webLink={'https://union-network.netlify.app'}
                />
                <OneProject img={Cloud}
                            title={'Blue Cloud'}
                            description={projectData.blueCloud}
                            webLink={'https://blue-cloud.vercel.app/'}
                />
                <OneProject img={Union}
                            title={'Online Store'}
                            description={projectData.store}
                            webLink={'https://union-network.netlify.app'}
                />

            </div>
        </div>

    );
};

export default Projects;
