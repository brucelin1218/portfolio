import React, {useState} from 'react';
import './navbar.css'
import '../../App.css'
import { RiCloseLine, RiMoreFill} from 'react-icons/ri'
import Menu from './Menu';
const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className='navbar'>
            <div className='navbar_container'>

            <div className='navbar_logo'>
                    <h3>RAYNER</h3>
                </div>
            <div className='navbar_links'>
            <Menu/>
            </div>

            <div className='navbar_menu'>
                {toggleMenu
                    ? <RiCloseLine size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiMoreFill size={27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className='navbar_menu_container scale-up-ver-top'>
                        <div className='navbar_menu_container_links '>
                           <Menu/>
                        </div>
                    </div>
                )}
            </div>
            </div>
        </div>
    );
};

export default Navbar;
