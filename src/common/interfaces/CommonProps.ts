import { WrappedFieldProps} from 'redux-form';

export interface LabelObject { htmlFor: string, value: any }
export interface LabelProps {
    value: string | LabelObject;
}
export interface BaseFieldProps extends WrappedFieldProps{
    label?: string | LabelObject;
    noLabel?: boolean;
    filter?: Function;
    onSave?: Function;
    outermostClass?: string;
    fieldClass?: string;
    disabled?: boolean;
}