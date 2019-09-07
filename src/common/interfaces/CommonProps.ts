import { InjectedFormProps } from 'redux-form';

export interface BaseProps extends InjectedFormProps{
    label?: any
    noLabel?: boolean;
    filter?: Function;
    onSave?: Function;
    outermostClass?: string;
    fieldClass?: string;
    disabled?: boolean;
}