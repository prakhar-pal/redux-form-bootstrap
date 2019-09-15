import { WrappedFieldProps} from 'redux-form';

export interface BaseFieldProps extends WrappedFieldProps{
    label?: string & { htmlFor: string, value: object};
    noLabel?: boolean;
    filter?: Function;
    onSave?: Function;
    outermostClass?: string;
    fieldClass?: string;
    disabled?: boolean;
}