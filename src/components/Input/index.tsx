import * as React from 'react';
import { Input as RsInput, InputGroup, InputGroupAddon, InputGroupText, Label } from 'reactstrap';
import isEqual from 'lodash.isequal';
import { BaseFieldProps } from '../../common/interfaces/CommonProps';

export interface InputProps extends BaseFieldProps{
    type: string;
    defaultValue?: any;
    addons?: {
        prepend: string[],
        append: string[]
    };
}

export class Input extends React.Component<InputProps, any>{

    componentDidMount(){
        const { defaultValue } = this.props;
        if(defaultValue !== undefined) this.saveToStore(defaultValue);
    }

    componentDidUpdate(oldProps: InputProps){
        const { defaultValue, onSave, input } = this.props;
        if(!isEqual(oldProps.defaultValue, defaultValue)) this.saveToStore(defaultValue);
        if(!isEqual(oldProps.input.value, input.value) && onSave && typeof onSave === typeof Function) 
            onSave(input.value);
    }

    affixData = (data: string[], type: "prepend" | "append") => (data && Array.isArray(data) ?
        (<InputGroupAddon addonType={type}>
            {data.map((d, index) => <InputGroupText key={index}>{d}</InputGroupText>)}
        </InputGroupAddon>) : null);

    saveToStore = (data: any)=>{
        const { filter, input } = this.props;
        data = filter && typeof filter === typeof Function? filter(data): data;
        input.onChange(data);
    }

    render(){
        const { type, defaultValue, addons, input, label, noLabel, outermostClass, fieldClass,  ...rest } = this.props;
         const labelInfo = !label ? null : typeof label === typeof "" ?
            { labelFor : label, labelValue: label} : typeof label === typeof {} ?
                {labelFor : label && label.htmlFor, labelValue : label.value} : null;
        const labelFor = labelInfo && labelInfo.labelFor || undefined;
        const labelValue = labelInfo && labelInfo.labelValue;
        return (
            <React.Fragment>
                { !noLabel && label ? <Label for={labelFor}>{labelValue}</Label> : null}
                <InputGroup>
                    {addons && this.affixData(addons.prepend, "prepend")}
                    <RsInput
                        type={type as any}
                        value={input.value}
                        {...rest}
                        {...input}
                    />
                    {addons && this.affixData(addons.append, "append")}
                </InputGroup>
            </React.Fragment>
        )
    }
}