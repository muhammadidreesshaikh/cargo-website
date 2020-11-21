import React from 'react';
import '../assets/css/footer.css';

function Footer() {
    return(
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="first">
                                <div className='logo'>
                                    <a href="#"><i class="fas fa-dice-d20"></i>Cargo</a>
                                </div>
                                <p className="pt-2">The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book in publishing  is a placeholder text commonly used to demonstrate.</p>

                                <div className="pt-4">
                                    <a className="press" href="#">Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="first">
                                <h3>COMPANY</h3>
                                <ul>
                                    <li><a href="#">Our History</a></li>
                                    <li><a href="#"> Investor Relations & Policies</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Gift Cards</a></li>
                                    <li><a href="#">Sale 30%</a></li>
                                    <li><a href="#">Merchandise Store</a></li>
                                </ul>
                            </div>
                        </div> 

                        <div className="col-md-3">
                            <div className="first">
                                <h3>STAY CONNECTED</h3>
                                <ul>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Instagram</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Messenger</a></li>
                                    <li><a href="#">Our App</a></li>
                                    <li><a href="#">111-235-0101</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="seprator"></div>

                        <div className="col-md-12">
                            <div className="last pt-2">
                                <p>© Copyright 2020, ilyasahmed081@gmail.com. All Rights Reserved.</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;