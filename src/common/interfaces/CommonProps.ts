import { WrappedFieldProps} from 'redux-form';

export interface BaseFieldProps extends WrappedFieldProps{
    label?: any
    noLabel?: boolean;
    filter?: Function;
    onSave?: Function;
    outermostClass?: string;
    fieldClass?: string;
    disabled?: boolean;
}