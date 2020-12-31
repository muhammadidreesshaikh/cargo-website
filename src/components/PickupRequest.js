import React from 'react';
import '../assets/css/pickuprequest.css';

class PickupRequest extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("PickupRequest");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section>
               <div className="pickup">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-md-10 col-lg-10">
                                <form className="row">
                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>Date</label>
                                            <input type="date" class="form-control" placeholder="Date"/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>Chosse Cargo</label>
                                            <select class="form-control">
                                                <option>ABC Cargo</option>
                                                <option>MNO Cargo</option>
                                                <option>XYZ Cargo</option>
                                                <option>default Cargo</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>To</label>
                                            <input type="to" class="form-control" placeholder="To"/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>From</label>
                                            <input type="from" class="form-control" placeholder="From"/>
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

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>Contact</label>
                                            <input type="number" class="form-control" placeholder="Contact"/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>Pickup Type</label>
                                            <select class="form-control">
                                                <option>Outgoing</option>
                                                <option>Incoming</option>
                                                <option>Registered</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div class="form-group">
                                            <label>Description Pickup</label>
                                            <textarea class="form-control" rows="5" placeholder="Description Pickup"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div className="pt-4 text-center">
                                            <button type="button" class="btn btn-fill btn-primary">Create Request</button>
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
export default PickupRequest;


