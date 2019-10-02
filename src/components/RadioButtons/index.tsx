import * as React from 'react';
import { Input, InputGroup } from 'reactstrap';
import FormComponent from '../FormComponent';
import { BaseFieldProps } from '../../common/interfaces/CommonProps';
import { Label } from '../Label';
export interface RadioButtonsProps {
    options: string[];
    noLabel?: boolean;
    label: string | { htmlFor: string, value: any }
    value?: string;
    onChange: (value: string) => void;
}
export default class RadioButtonsBS extends React.Component<RadioButtonsProps, any>{
    render() {
        const { options, noLabel, label, onChange, value, ...rest } = this.props;
        return (
            <React.Fragment>
                {!noLabel && label ? <Label value={label} /> : null}
                {options && Array.isArray(options) ?
                    options.map(option => (<>
                        <InputGroup>
                            <Input type="radio" value={option}
                                checked={value === option}
                                onClick={() => onChange(option)}
                                {...rest}
                            />
                        </InputGroup>
                        <Label value={option} />
                    </>)) : null
                }
            </React.Fragment>
        )
    }
}

export type RadioButtonsFormProps = RadioButtonsProps & BaseFieldProps;
export class RadioButtons extends FormComponent<RadioButtonsFormProps>{
    render() {
        const { options, noLabel, label, value } = this.props;
        return (
            <RadioButtonsBS
                options={options}
                noLabel={noLabel}
                label={label}
                value={value}
                onChange={this.saveToStore}
            />
        )
    }
}