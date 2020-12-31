import React from 'react';
import '../assets/css/pickuprequest.css';
import fire from '../core/Firebase.js';

class PickupRequest extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.location.data,
            cargo: '',
            date: '',
            cargo_company: '',
            to: '',
            from: '',
            pickup_address: '',
            dropoff_address: '',
            pickup_contact: '',
            dropoff_contact: '',
            description: '',
            pickup_type: '',
        }
    }
    
    componentDidMount() {
        this.getCargo();
    
        if(this.state.data) {
          this.setState({
            cargo_company: this.state.data.cargo_company,
            date: this.state.data.date,
            to: this.state.data.to,
            from: this.state.data.from,
            pickup_address: this.state.data.pickup_address,
            dropoff_address: this.state.data.dropoff_address,
            pickup_contact: this.state.pickup_contact,
            dropoff_contact: this.state.data.dropoff_contact,
            description: this.state.data.description,
            pickup_type: this.state.data.pickup_type,
          })
        }
    }

    createDetails = () => {
        const detailsRef = fire.database().ref('pickup-request');
        
        const details = {
            cargo_company: this.state.cargo_company,
            date: this.state.date,
            to: this.state.to,
            from: this.state.from,
            pickup_address: this.state.pickup_address,
            dropoff_address: this.state.dropoff_address,
            pickup_contact: this.state.pickup_contact,
            dropoff_contact: this.state.dropoff_contact,
            description: this.state.description,
            pickup_type: this.state.pickup_type,
        };
    
        detailsRef.push(details, function(error) {
            if (error) {
            alert("Data could not be saved." + error);
            } else {
            alert("Data saved successfully.");
            } 
        });
    
        console.log(details);
    };

    getCargo = () => {
        let tempLcargo = [];
        const cargoRef = fire.database().ref('users');
    
        cargoRef.on('value', (snapshot) => {
          const cargo = snapshot.val();
    
          for (let id in cargo) {
            tempLcargo.push({ id, ...cargo[id] });
          }
          
          let filtered = tempLcargo.filter(item => item.user_type == 'cargo');
    
          this.setState({ cargo: filtered });
        });
    }; 

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state);
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
                                            <input name="date" type="date" class="form-control" placeholder="Date" value={this.state.date} onChange={(event) => this.handleChange(event)}/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                        <label>Cargo Company</label>
                                        <select name="cargo_company" class="form-control" value={this.state.cargo_company} onChange={(event) => this.handleChange(event)}>
                                        { 
                                            this.state.cargo && this.state.cargo.map((item, key) => {
                                                return(
                                                    <option key={key}>{item.name}</option>                            
                                                )
                                            })
                                        }
                                        </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>To</label>
                                            <input name="to" type="to" class="form-control" placeholder="To" value={this.state.to} onChange={(event) => this.handleChange(event)}/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>From</label>
                                            <input name="from" type="from" class="form-control" placeholder="From" value={this.state.from} onChange={(event) => this.handleChange(event)}/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>Pickup Address</label>
                                            <input name="pickup_address" type="address" class="form-control" placeholder="Address" value={this.state.pickup_address} onChange={(event) => this.handleChange(event)}/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>Dropoff Address</label>
                                            <input name="dropoff_address" type="address" class="form-control" placeholder="Address" value={this.state.dropoff_address} onChange={(event) => this.handleChange(event)}/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>Pickup Contact</label>
                                            <input name="pickup_contact" type="contact" class="form-control" placeholder="Contact" value={this.state.pickup_contact} onChange={(event) => this.handleChange(event)}/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>Dropoff Contact</label>
                                            <input name="dropoff_contact" type="contact" class="form-control" placeholder="Contact" value={this.state.dropoff_contact} onChange={(event) => this.handleChange(event)}/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>Pickup Type</label>
                                            <select name="pickup_type" class="form-control" value={this.state.pickup_type} onChange={(event) => this.handleChange(event)}>
                                                <option>Outgoing</option>
                                                <option>Incoming</option>
                                                <option>Registered</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div class="form-group">
                                            <label>Description Pickup</label>
                                            <textarea name="description" type="text" class="form-control" rows="5" placeholder="Description Pickup" value={this.state.description} onChange={(event) => this.handleChange(event)}></textarea>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div className="pt-4 text-center">
                                        <button onClick={() => this.createDetails()} type="button" class="btn btn-fill btn-primary">Create Request</button>
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


