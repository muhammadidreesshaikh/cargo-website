import React from 'react';
import '../assets/css/slider.css';

class Slider extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Slider");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section>
                <div className="slider">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-8 col-lg-8">
                                <h1>Safe & Reliable <span>Logistic</span> Solutions!</h1>

                                <div className="form pt-5">
                                    <input type="text" placeholder="Shipment Code"></input><i class="fa fa-search"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Slider;