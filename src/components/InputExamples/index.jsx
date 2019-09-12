import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';

import { Input } from 'redux-form-bootstrap';

class InputExamples extends Component {
    render(){
        return <div className="container">
            <h3>
                Normal input
            </h3>
            <Field
                name="Name"
                component={Input}
                type="text"
            />
            <hr/>

            <h3>
                Input with prefix
            </h3>
            <Field
                name="Age"
                component={Input}
                type="number"
                addons={{
                    prepend: ['@']
                }}
            />

            <hr />
            <h3>
                Input with suffix
            </h3>

            <Field
                name="Sex"
                component={Input}
                type="text"
                addons={{
                    append: ['@mycustom.mail']
                }}
            />

            <hr />
            <h3>
                Input with prefix and suffix
            </h3>

            <Field
                name="Location"
                component={Input}
                type="number"
                addons={{
                    append: ['India'],
                    prepend:['+91']
                }}
            />

            <hr />
        </div>
    }
}

export default reduxForm({form:'InputExamples'})(InputExamples);