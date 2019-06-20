import React from 'react';
import {connect} from "react-redux";
import Modal from '../Modal';
import history from '../../history';
import {fetchOne, remove} from "../../actions";

class Delete extends React.Component {

    componentDidMount = () => {
        this.props.fetchOne(this.props.match.params.id)
    };

    getContent = () => {
        if (!this.props.stream) {
            return 'Are you sure?'
        }

        return `Are you sure that you want to delete: ${this.props.stream.title}`;
    }

    getActions = () => {
        return (
            <React.Fragment>
                <button onClick={() => this.props.remove(this.props.match.params.id)} className="ui button negative">Delete</button>
                <button onClick={() => history.push('/')} className="ui button">Cancel</button>
            </React.Fragment>
        );
    };

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }

        return (
            <Modal
                title="Delete Stream"
                content={this.getContent()}
                actions={this.getActions()}
                onDismiss={() => history.push('/')}>
            </Modal>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {fetchOne, remove})(Delete);