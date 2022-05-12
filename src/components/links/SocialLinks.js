import React from 'react';
import {socialsData} from '../../data/socialsData';
import {VscOctoface} from 'react-icons/vsc';
import {FaLinkedinIn} from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div className='icon_container'>
            <a
                href={socialsData.github}
                target='_blank'
                rel="noreferrer"
            >
                <div className='icon'>
                    <VscOctoface size={27}/>
                </div>
            </a>
            <a
                href={socialsData.linkedIn}
                target='_blank'
                rel="noreferrer"
            >
                <div className='icon'>
                    <FaLinkedinIn size={27}/>
                </div>
            </a>
        </div>
    );
};

export default SocialLinks;
