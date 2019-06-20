import React from 'react';
import {connect} from "react-redux";
import {create as createStream} from "../../actions";
import Form from './Form';

class Create extends React.Component {

    onSubmit = formValues => {
        this.props.createStream(formValues);
    };

    render = () => {
        return (
            <div>
                <h3>Create a new stream</h3>
                <Form onSubmit={this.onSubmit}/>
            </div>
        );
    };
}

//wire up the component with redux-connect
export default connect(null, {createStream})(Create);