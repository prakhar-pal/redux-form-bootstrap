import * as React from 'react';
import { Input as RsInput, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { BaseProps } from '../../common/interfaces/CommonProps';

export interface InputProps extends BaseProps{
    type: string;
    defaultValue: any;
    addons?: {
        prepend: string[],
        append: string[]
    };
    input: any;
}

export class Input extends React.Component<InputProps, any>{

    affixData = (data: string[], type: "prepend" | "append") => (data && Array.isArray(data) ?
        (<InputGroupAddon addonType={type}>
            {data.map(d => <InputGroupText>{d}</InputGroupText>)}
        </InputGroupAddon>) : null);

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