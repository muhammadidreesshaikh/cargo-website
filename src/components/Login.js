import React from 'react';
import '../assets/css/login.css';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Login");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section>
               <div className="login">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-6 col-lg-6">
                                <form>
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input type="email" class="form-control" placeholder="Email"/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div class="form-group">
                                            <label>Password</label>
                                            <input type="password" class="form-control" placeholder="Password"/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div className="pt-4 text-center">
                                            <button type="button" class="btn btn-fill btn-primary">Login</button>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div className="pt-4 text-center">
                                            <a href="#">Forget Your Password?</a>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Login;