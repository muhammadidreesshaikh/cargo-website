import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/header.css'


function Header() {

    const [menuToggle, setMenuToggle] = useState(false);

    console.log(menuToggle);

    return(
        <div>
            <div className="header">

                <div className={"mobile-menu-toggle " + (menuToggle ? 'change' : '')} onClick={() => setMenuToggle(!menuToggle)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <div className="desktop-menu container">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <div className='logo'>
                                <a href="#"><i class="fas fa-dice-d20"></i>Cargo</a>
                            </div>
                        </div>

                        <div className="col-sm-8 col-md-8 col-lg-8">
                            <div className="nav">
                                 <ul>
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/track">Track</Link></li>
                                    <li><Link to="/apply">Apply Only</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                 </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"mobile-menu sidenav " + (menuToggle ? 'open' : 'close')}>

                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className='logo'>
                            <a href="#"><i class="fas fa-dice-d20"></i></a>
                        </div>
                    </div>

                    <Link to="/home" onClick={() => setMenuToggle(!menuToggle)}>Home</Link>
                    <Link to="/track" onClick={() => setMenuToggle(!menuToggle)}>Track</Link>
                    <Link to="/apply" onClick={() => setMenuToggle(!menuToggle)}>Apply Only</Link>
                    <Link to="/login" onClick={() => setMenuToggle(!menuToggle)}>Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;