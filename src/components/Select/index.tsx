import * as React from 'react';
import { FormGroup, Input } from 'reactstrap';
import isEqual from 'lodash.isequal';
import { Label } from '../Label';
import withFormComponent from '../../common/withFormComponent';
import { BaseFieldProps, LabelValue } from '../../common/interfaces/CommonProps';
import getIdFromLabel from '../../utils/getIdFromLabel';

export interface SelectOption {
    label: string;
    value: string | number;
}
export interface SelectProps extends BaseFieldProps{
    options: SelectOption[];
    noLabel?: boolean;
    label?: LabelValue;
    filter?: Function;
    value: string|number;
    multiple?: boolean;
    onChange?: (value: string) => void;
    notSelectedText?: string;
}

export class SelectForm extends React.Component<SelectProps, any>{
    componentDidUpdate(oldProps:SelectProps){
        const { options } = this.props;
        if (oldProps.options.length !== options.length || !isEqual(oldProps.options, options)){

        }
    }
    render() {
        const { label, options, onChange, noLabel, multiple, value, notSelectedText = "Nothing is Selected" } = this.props;
        return (
            <FormGroup>
                {!noLabel && label ? <Label value={label} /> : null}
                <Input
                    data-testid="select-option"
                    id={label && getIdFromLabel(label)}
                    type="select"
                    onChange={e => onChange && onChange(e.target.value)}
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


export default withFormComponent(SelectForm);
