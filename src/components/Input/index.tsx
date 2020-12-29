import * as React from 'react';
import { Input as RsInput, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { BaseFieldProps } from '../../common/interfaces/CommonProps';
import { Label } from '../Label';
import withFormComponent from '../../common/withFormComponent';

export interface InputProps extends BaseFieldProps {
    type?: string;
    value?: any;
    addons?: {
        prepend: string[],
        append: string[]
    };
    className?: string;
    onChange?: Function;
}

export class InputComponent extends React.Component<InputProps, any>{

    affixData = (data: string[], type: "prepend" | "append") => (data && Array.isArray(data) ?
        (<InputGroupAddon addonType={type}>
            {data.map((d, index) => <InputGroupText key={index}>{d}</InputGroupText>)}
        </InputGroupAddon>) : null);

    handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const { onChange } = this.props;
        onChange && onChange(value);
    }

    render() {
        const { type, addons, label, noLabel, value, className, onChange, ...rest } = this.props;
        return (
            <React.Fragment>
                {!noLabel && label ? <Label value={label} /> : null}
                <InputGroup>
                    {addons && this.affixData(addons.prepend, "prepend")}
                    <RsInput
                        type={type as any}
                        value={value}
                        className={className}
                        onChange={e => onChange && onChange(e)}
                        {...rest}
                    />
                    {addons && this.affixData(addons.append, "append")}
                </InputGroup>
            </React.Fragment>
        )
    }
}

export default withFormComponent(InputComponent);