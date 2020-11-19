import React from 'react';
import Slider from '../shared/Slider';
import '../assets/css/home.css';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Home");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div>
                <Slider />
                <section>
                    <div className="service">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-8 col-lg-8">
                                    <h1>Our Services</h1>
                                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default many web sites still in their infancy.</p>
                                </div>

                                <div className="col-12 box mt-5">
                                    <div className="row">
                                        <div className="col-12 col-md-4 col-lg-4">
                                            <div className="cards">
                                                <div className="card-body">
                                                    <i class="fab fa-watchman-monitoring"></i>
                                                    <h2 className="pt-4">Live Monitoring</h2>
                                                    <p>Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-4 col-lg-4">
                                            <div className="cards">
                                                <div className="card-body">
                                                    <i class="fas fa-plane"></i>
                                                    <h2 className="pt-4">Transportation</h2>
                                                    <p>Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-4 col-lg-4">
                                            <div className="cards">
                                                <div className="card-body">
                                                    <i class="fas fa-globe-americas"></i>
                                                    <h2 className="pt-4">Worldwide Service</h2>
                                                    <p>Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing.</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="safe">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-8 col-lg-8">
                                    <h1>100% secure and safe</h1>
                                    <p className="pt-2">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like PageMaker including versions.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="process">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-8 col-lg-8">
                                    <h1>PROCESS</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution making it look like readable .</p>
                                </div>

                                <div className="col-12 box mt-5">
                                    <div className="row">
                                        <div className="col-md-3 col-lg-3">
                                            <div className="card">
                                                <div className="card-body">
                                                    <i class="fas fa-search"></i>
                                                    <h4 className="pt-4">FIND</h4>
                                                    <p>Lorem ipsum dolor sit amet incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco laboris.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-lg-3">
                                            <div className="card">
                                                <div className="card-body">
                                                    <i class="fas fa-shield-alt"></i>
                                                    <h4 className="pt-4">SECURE</h4>
                                                    <p>Lorem ipsum dolor sit amet incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco laboris.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-lg-3">
                                            <div className="card">
                                                <div className="card-body">
                                                    <i class="fas fa-sync-alt"></i>
                                                    <h4 className="pt-4">UPDATE</h4>
                                                    <p>Lorem ipsum dolor sit amet incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco laboris.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-3 col-lg-3">
                                            <div className="card">
                                                <div className="card-body">
                                                    <i class="fas fa-truck"></i>
                                                    <h4 className="pt-4">WE DELIVER</h4>
                                                    <p>Lorem ipsum dolor sit amet incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco laboris.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="question">
                        <div className="container">
                            <div className="row main">
                                <div className="col-12 col-md-8 col-lg-8">
                                    <div className="heading">
                                        <div className="container">
                                            <h6>Have any question about us?</h6>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-12 col-lg-4">
                                    <div className="button">
                                        <a className="active" href="#">021 2223 4541 23</a>
                                        <a href="#">Contact Us</a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form">
                        <div className="container">
                            <div className="row justify-content-center">

                                <div className="col-12 col-md-10 col-lg-10">
                                    <form className="row">
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input type="name" class="form-control" placeholder="Name"/>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input type="email" class="form-control" placeholder="Email"/>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div class="form-group">
                                                <label>Address</label>
                                                <input type="address" class="form-control" placeholder="Address"/>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div class="form-group">
                                                <label>Contact</label>
                                                <input type="number" class="form-control" placeholder="Contact"/>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-12 col-lg-12">
                                            <div class="form-group">
                                                <label for="exampleFormControlTextarea1">Message</label>
                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Message"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-12 col-lg-12">
                                            <div className="pt-4 text-center">
                                                <a className="press">Send Now</a>
                                            </div>
                                        </div>

                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>
            </div>
        );
    }
}
export default Home;