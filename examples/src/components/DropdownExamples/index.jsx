import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Dropdown } from 'redux-form-bootstrap';
class DropdownExamples extends React.Component{
    render(){
        return <div>
            <h3>
                <Field
                    name="Dropdown1"
                    component={Dropdown}
                    text="Click Me!"
                    options={[
                        {
                            value: 'Entry1',
                            type: 'divider'
                        },{
                            value: 'Entry2',
                            type: 'disabled'
                        }
                    ]}
                />
            </h3>
            <hr/>
            {/* <h3></h3><hr/> */}
        </div>
    }
}

export default reduxForm({form: 'DropdownExamples'})(DropdownExamples);