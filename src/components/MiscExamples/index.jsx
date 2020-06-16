import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Select, PopupTextarea } from 'redux-form-bootstrap';
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
                        defaultValue={candyTypes[2]}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Field
                        name="story"
                        component={PopupTextarea}
                        buttonColor={"primary"}
                        buttonLabel="Qlique Me"
                        className="w-100"
                        label="Age"
                        defaultValue="13"
                    />
                </div>
                <div className="col">
                    <i>Add New Col here</i>
                </div>
            </div>
        </div>
    );
}

export default reduxForm({form: 'MiscExamples'})(MiscExamples);