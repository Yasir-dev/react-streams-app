import React from 'react';
import {connect} from "react-redux";
import flv from 'flv.js';
import {fetchOne} from "../../actions";

class Show extends React.Component {

    constructor(props) {
        super(props);
        this.videoRefs = React.createRef();
    }

    componentDidMount = () => {
        this.props.fetchOne(this.props.match.params.id);
        this.initPlayer();
    };

    componentDidUpdate() {
        this.initPlayer();
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    initPlayer() {
        if (this.player || !this.props.stream) {
            return;
        }

        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
        });

        this.player.attachMediaElement(this.videoRefs.current);
        this.player.load();
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <video ref={this.videoRefs} style={{width: '100%'}} controls={true}/>
                <h1>{this.props.stream.title}</h1>
                <h5>{this.props.stream.description}</h5>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]};
};

export default connect(mapStateToProps, {fetchOne})(Show);