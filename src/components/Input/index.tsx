import * as React from 'react';
import { Input as RsInput, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { BaseFieldProps } from '../../common/interfaces/CommonProps';
import { Label } from '../Label';
import FormComponent from '../FormComponent';

export interface InputProps {
    type: string;
    value?: any;
    addons?: {
        prepend: string[],
        append: string[]
    };
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined;
    noLabel?: boolean;
    label?: string | { htmlFor: string, value: any }
    className?: string;
}

export default class InputBS extends React.Component<InputProps, any>{

    affixData = (data: string[], type: "prepend" | "append") => (data && Array.isArray(data) ?
        (<InputGroupAddon addonType={type}>
            {data.map((d, index) => <InputGroupText key={index}>{d}</InputGroupText>)}
        </InputGroupAddon>) : null);

    render() {
        const { type, addons, label, noLabel, value, className, ...rest } = this.props;
        return (
            <React.Fragment>
                {!noLabel && label ? <Label value={label} /> : null}
                <InputGroup>
                    {addons && this.affixData(addons.prepend, "prepend")}
                    <RsInput
                        type={type as any}
                        value={value}
                        className={className}
                        {...rest}
                    />
                    {addons && this.affixData(addons.append, "append")}
                </InputGroup>
            </React.Fragment>
        )
    }
}


export type InputFormType = InputProps & BaseFieldProps;
export class Input extends FormComponent<InputFormType>{
    constructor(props: InputFormType, state: any) {
        super(props, state);
    }
    handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        this.saveToStore(value);
    }
    render() {
        const { type, addons, label, value, noLabel, ...rest } = this.props;
        return <InputBS
            type={type}
            addons={addons}
            label={label}
            noLabel={noLabel}
            value={value}
            onChange={this.handleOnChange}
            {...rest}
        />
    }
}