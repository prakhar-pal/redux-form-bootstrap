import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Select, PopupTextarea, RadioButton } from 'redux-form-bootstrap';
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
                        label="Enter a short story"
                        defaultValue="Test text for PopupTextarea"
                    />
                </div>
                <div className="col">
                    <Field
                        name="fav_person"
                        component={RadioButton}
                        direction="horizontal"
                        options={['Rajib','Mosand','Debika','Rabi','Nagain']}
                        label={{
                            htmlFor:'labelAsRadio',
                            value: 'Chose your name'
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default reduxForm({form: 'MiscExamples'})(MiscExamples);