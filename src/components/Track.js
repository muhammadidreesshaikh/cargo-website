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
            <div>
                <p>Track Track Track</p>
            </div>
        );
    }
}
export default Track;