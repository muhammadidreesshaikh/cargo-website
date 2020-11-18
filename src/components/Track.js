import React from 'react';
import '../assets/css/track.css';

class Track extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Track");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <section>
                <div className="track">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-8 col-lg-8">
                                <h1>Track Your Oder</h1>

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
export default Track;