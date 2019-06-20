import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import _ from 'lodash';
import {fetchList} from "../../actions";

class List extends React.Component {

    /**
     * triggers after the component render for the first time
     */
    componentDidMount = () => {
        this.props.fetchList();
    };

    renderAdminButtons = (stream) => {
        if (stream.userId === this.props.loggedInUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/stream/edit/${stream.id}`} className="ui button primary">EDIT</Link>
                    <Link to={`/stream/delete/${stream.id}`} className="ui button negative">DELETE</Link>
                </div>
            );
        }
    }

    renderList = () => {
        return this.props.streams.map(stream => {
           return (
                <div className="item" key={stream.id}>
                    {this.renderAdminButtons(stream)}
                    <i className="large middle aligned icon play"/>
                    <div className="content">
                        <Link to={`/stream/${stream.id}`}>
                            {stream.title}
                        </Link>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
           );
        });
    };

    renderCreateButton = () => {
        if (this.props.isSignedIn) {
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/stream/new" className="ui button primary">CREATE</Link>
                </div>
            );
        }
    };

    renderHeadline = () => {
        if (_.isEmpty(this.props.streams)) {
            return <h2>Currenlty no streams available</h2>
        }

        return <h2>Available Streams</h2>;
    }

    render = () => {
        return (
            <div>
                {this.renderHeadline()}
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreateButton()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        loggedInUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, {fetchList} )(List);