import React from 'react';
import {connect} from "react-redux";
import _ from 'lodash';
import {fetchOne, update} from "../../actions";
import Form from './Form';

class Edit extends React.Component {

    componentDidMount = () => {
        this.props.fetchOne(this.props.match.params.id);
    };

    onSubmit = (formValues) => {
        this.props.update(this.props.match.params.id, formValues);
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit the stream</h3>
                <Form initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]};
};

export default connect(mapStateToProps, {fetchOne, update})(Edit);