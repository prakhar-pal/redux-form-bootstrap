import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';

import { Input, RadioButton } from 'redux-form-bootstrap';

class InputExamples extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    onSave = (name, value)=> this.setState({[name]:value});
    render(){
        console.log(typeof this);
        const { Name, Age } = this.state;
        return <div className="container">
            <h3>
                Normal input
            </h3>
            <Field
                name="Name"
                component={Input}
                type="text"
                onSave={(value)=> this.onSave("Name", value)}
            />
            <div> current value is: <span>{Name}</span></div>
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
                onSave={(value)=> this.onSave("Age", value)}
            />
            <div> current value is: <span>{Age}</span></div>
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
            <h3>
                Input with label as string
            </h3>

            <Field
                name="Location"
                component={Input}
                type="string"
                addons={{
                    append: ['Kaneda'],
                    prepend:['+1']
                }}
                label="This is a label"
            />

            <hr />
            <h3>
                Input with label as an object
            </h3>

            <Field
                name="Location"
                component={Input}
                type="number"
                addons={{
                    append: ['Chini'],
                    prepend:['+86']
                }}
                label={{
                    htmlFor:'labelWithObject',
                    value: 'This is label with object'
                }}
            />

            <hr />

            <h3>
                Radio
            </h3>

            <Field
                name="radio"
                component={RadioButton}
                direction="vertical"
                options={['Rajib','Mosand','Debika','Rabi','Nagain']}
                label={{
                    htmlFor:'labelAsRadio',
                    value: 'Chose your name'
                }}
            />
        </div>
    }
}

export default reduxForm({form:'InputExamples'})(InputExamples);