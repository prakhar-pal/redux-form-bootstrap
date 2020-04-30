import * as React from 'react';
import { Input as RsInput, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { BaseFieldProps } from '../../common/interfaces/CommonProps';
import { Label } from '../Label';
import withFormComponent, { InjectedExtraProps } from '../../common/withFormComponent';

export interface InputProps {
    type: string;
    value?: any;
    addons?: {
        prepend: string[],
        append: string[]
    };
    onBlur?: ((event: React.FocusEvent<HTMLInputElement>) => void) | undefined;
    noLabel?: boolean;
    label?: string | { htmlFor: string, value: any }
    className?: string;
}

class InputComponent extends React.Component<InputProps & InjectedExtraProps, any>{

    affixData = (data: string[], type: "prepend" | "append") => (data && Array.isArray(data) ?
        (<InputGroupAddon addonType={type}>
            {data.map((d, index) => <InputGroupText key={index}>{d}</InputGroupText>)}
        </InputGroupAddon>) : null);

    handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const { onChange } = this.props;
        onChange(value);
    }

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
const Input = withFormComponent(InputComponent);
export default Input;