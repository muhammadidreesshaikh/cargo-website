import React from 'react';
import '../assets/css/apply.css';

class Apply extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
       
    }

    render() {
        return(
            <section>
                <div className="apply">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-8 col-lg-8">

                                <div className="col-12 col-md-12 col-lg-12">
                                    <div class="add-heading">
                                        <h3>Apply Online</h3>
                                        <a href="#"><p className="pt-2">Customer / Cargo / Transport / Colloection</p></a>
                                    </div>
                                </div>

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
                                            <label>Password</label>
                                            <input type="password" class="form-control" placeholder="Password"/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>User Type</label>
                                            <select class="form-control">
                                            <option>Cargo Company</option>
                                            <option>Customer Company</option>
                                            <option>Transport Company</option>
                                            <option>Colloection Company</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>Cargo Company</label>
                                            <select class="form-control">
                                            <option>TCS</option>
                                            <option>Leopard</option>
                                            <option>M&P</option>
                                            <option>BlueX</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>Contact</label>
                                            <input type="number" class="form-control" placeholder="Contact"/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>Status</label>
                                            <select class="form-control">
                                            <option>Approve</option>
                                            <option>Block</option>
                                            <option>UnBlock</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div className="pt-4 text-center">
                                            <button type="button" class="btn btn-primary mr-2">Add</button>
                                            <button type="button" class="btn btn-success">Update</button>
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
export default Apply;