import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Select } from 'redux-form-bootstrap';
export function MiscExamples(props){
    const candyTypes = ['Chocolate',
        'Gummies',
        'Hard Candies',
        'Licorice',
        'Lollipops',
        'Sours',
        'Chewing gums'];
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Field
                        name="Age"
                        component={Input}
                        label="Age"
                        type="text"
                        defaultValue="13"
                    />
                </div>
                <div className="col">
                    <Field
                        name="CandyType"
                        component={Select}
                        label="CandyType"
                        options={candyTypes.map(type=> ({label: type, value: type}))}
                        notSelectedText="Why You No Select :("
                    />
                </div>
            </div>
        </div>
    );
}

export default reduxForm({form: 'MiscExamples'})(MiscExamples);