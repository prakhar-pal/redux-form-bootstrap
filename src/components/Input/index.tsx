import * as React from 'react';
import { Input as RsInput, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
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
        const { defaultValue } = this.props;
        if(!isEqual(oldProps.defaultValue, defaultValue)) this.saveToStore(defaultValue);
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
        const { type, defaultValue, addons, ...rest } = this.props;
        return (
            <InputGroup>
                {addons && this.affixData(addons.prepend, "prepend")}
                <RsInput
                    type={type as any}
                    defaultValue={defaultValue}
                    {...rest}
                    {...(rest["input"] as any)}
                />
                {addons && this.affixData(addons.append, "append")}
            </InputGroup>
        )
    }
}