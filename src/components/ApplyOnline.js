import React from 'react';
import '../assets/css/applyonline.css';
import fire from '../core/Firebase.js';

class Apply extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.location.data,
            cargo: '',
            name: '',
            email: '',
            password: '',
            user_type: '',
            cargo_company: '',
            contact: '',
            status: '',
        };
    } 

    componentDidMount() {
        this.getUser();
    
        if(this.state.data) {
            this.setState({
            name: this.state.data.name,
            email: this.state.data.email,
            password: this.state.data.password,
            cargo_company: this.state.data.cargo_company,
            user_type: this.state.data.user_type,
            contact: this.state.data.contact,
            status: this.state.data.status,
          })
        }
    }

    createUser = () => {
        const userRef = fire.database().ref('users');
      
        const user = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          cargo_company: this.state.cargo_company,
          user_type: this.state.user_type,
          contact: this.state.contact,
          status: this.state.status
        };
    
        userRef.push(user, function(error) {
          if (error) {
            alert("Data could not be saved." + error);
          } else {
            alert("Data saved successfully.");
          } 
        });
    
        this.signupForCustomer(this.state.email, this.state.password);
    };

    // creating default account for customer
    signupForCustomer = (email, password) => {
        fire.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            console.log(res);
            if (res.additionalUserInfo.isNewUser == true) alert('Signup Successfull.');
            else alert('Signup Failed!');
        })
        .catch(error => {
            console.log(error);
        })
    }

    getUser = () => {
        let tempLuser = [];
        const userRef = fire.database().ref('users');
    
        userRef.on('value', (snapshot) => {
          const user = snapshot.val();
    
          for (let id in user) {
            tempLuser.push({ id, ...user[id] });
          }
          
          let filtered = tempLuser.filter(item => item.user_type == 'cargo');
    
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
                                            <input name="name" type="name" class="form-control" placeholder="Name" value={this.state.name} onChange={(event) => this.handleChange(event)}/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input name="email"  type="email" class="form-control" placeholder="Email" value={this.state.email} onChange={(event) => this.handleChange(event)}/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>Password</label>
                                            <input name="password"  type="password" class="form-control" placeholder="password" value={this.state.password} onChange={(event) => this.handleChange(event)}/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>User Type</label>
                                            <select name="user_type" class="form-control" value={this.state.user_type} onChange={(event) => this.handleChange(event)}>
                                            <option>Select User Type</option>
                                            <option>Cargo Company</option>
                                            <option>Customer Company</option>
                                            <option>Agent Company</option>
                                            <option>Transport Company</option>
                                            <option>Colloection Company</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>Cargo Company</label>
                                            <select name="cargo_company" class="form-control" value={this.state.cargo_company} onChange={(event) => this.handleChange(event)}>
                                            <option value="0">Select Cargo Company</option>
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
                                            <label>Contact</label>
                                            <input name="contact" type="number" class="form-control" placeholder="Contact" value={this.state.contact} onChange={(event) => this.handleChange(event)}/>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-6">
                                        <div class="form-group">
                                            <label>Status</label>
                                            <select name="status" class="form-control" value={this.state.status} onChange={(event) => this.handleChange(event)}>
                                            <option>Approve</option>
                                            <option>Block</option>
                                            <option>UnBlock</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-12">
                                        <div className="pt-4 text-center">
                                            <button onClick={() => this.createUser()} type="button" class="btn btn-fill btn-primary mr-2">Add</button>
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