import React from 'react';
import {Field, reduxForm} from 'redux-form';

class Form extends React.Component {

    renderError = (meta) => {
        if (meta.touched && meta.error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {meta.error}
                    </div>
                </div>
            );
        }
    };

    renderInput = ({input, label, meta}) => {
        const cssClass = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={cssClass}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render = () => {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter title"/>
                <Field name="description" component={this.renderInput} label="Enter description"/>
                <button className="ui button primary">Create</button>
            </form>
        );
    };
}

const validateForm = (values) => {
    const errors = {};
    if (!values.title) {
        errors.title = 'Title is a required field';
    }
    if (!values.description) {
        errors.description = 'Description is a required field';
    }

    return errors;
}

//wire up component with redux-form (form name and validation callback)
export default reduxForm({form: 'stream-form', validate: validateForm})(Form);