import * as React from 'react';
import { Input, InputGroup } from 'reactstrap';
import isEqual from 'lodash.isequal';
import { BaseFieldProps } from '../../common/interfaces/CommonProps';
import { Label } from '../Label';
export interface RadioButtonsProps extends BaseFieldProps{
    options: string[];
    defaultValue: string;
}
export class RadioButtons extends React.Component<RadioButtonsProps,any>{

    componentDidMount(){
        const { defaultValue } = this.props;
        if(defaultValue !== undefined) this.saveToStore(defaultValue);
    }

    componentDidUpdate(oldProps: RadioButtonsProps){
        const { defaultValue, onSave, input } = this.props;
        if(!isEqual(oldProps.defaultValue, defaultValue)) this.saveToStore(defaultValue);
        if(!isEqual(oldProps.input.value, input.value) && onSave && typeof onSave === typeof Function) 
            onSave(input.value);
    }

    saveToStore = (data: any)=>{
        const { filter, input } = this.props;
        data = filter && typeof filter === typeof Function? filter(data): data;
        input.onChange(data);
    }
    render(){
        const { defaultValue, input, label, noLabel, outermostClass, fieldClass, options, ...rest } = this.props;
        return (
            <React.Fragment>
                {!noLabel && label ? <Label value={label} /> : null}
                {options && Array.isArray(options) ?
                    options.map(option => (<>
                    <InputGroup>
                            <Input type="radio" value={option}
                                checked={input.value === option}
                                onClick={() => this.saveToStore(option)}
                                {...rest}
                            />
                    </InputGroup>
                    
                    <Label value={option}/>
                    </>)) : null
                }
            </React.Fragment>
        )
    }
}