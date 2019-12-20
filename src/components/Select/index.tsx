import * as React from 'react';
import { FormGroup, Input } from 'reactstrap';
import isEqual from 'lodash.isequal';
import { Label } from '../Label';
import FormComponent from '../FormComponent';
import { BaseFieldProps } from '../../common/interfaces/CommonProps';

export interface SelectProps {
    options: { label: string, value: string }[];
    name: string;
    noLabel?: boolean;
    label?: string | { htmlFor: string, value: any }
    value?: string;
    multiple?: boolean;
    onChange: (value: string) => void;
    notSelectedText?: string;
}

export default class SelectBS extends React.Component<SelectProps, any>{
    componentDidUpdate(oldProps:SelectProps){
        const { options } = this.props;
        if (oldProps.options.length !== options.length || !isEqual(oldProps.options, options)){

        }
    }
    render() {
        const { label, options, name, onChange, noLabel, multiple, value, notSelectedText = "Nothing is Selected" } = this.props;
        return (
            <FormGroup>
                {!noLabel && label ? <Label value={label} /> : null}
                <Input
                    type="select"
                    name={name}
                    onChange={(e) => onChange(e.target.value)}
                    multiple={multiple}
                    value={value}
                >
                    <option value="">{notSelectedText}</option>
                    {
                        options.map(option => (
                            <option
                                key={option.label}
                                value={option.value}
                            >
                                {option.label}
                            </option>))
                    }
                </Input>
            </FormGroup>
        )
    }
}


export type SelectFormProps = SelectProps & BaseFieldProps;
export class Select extends FormComponent<SelectFormProps>{
    render() {
        const { options, noLabel, label, multiple, input: { value, name }, notSelectedText } = this.props;
        return (
            <SelectBS
                options={options}
                name={name}
                value={value}
                noLabel={noLabel}
                label={label}
                onChange={this.saveToStore}
                multiple={multiple}
                notSelectedText={notSelectedText}
            />
        )
    }
}