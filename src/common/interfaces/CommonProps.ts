export interface LabelObject { 
    htmlFor: string, 
    value: any 
}

export interface LabelProps {
    value: string | LabelObject;
    className?: string;
    onClick?: Function;
    noLabel?: boolean;
}
export interface BaseFieldProps{
    label?: string | LabelObject;
    noLabel?: boolean;
    filter?: Function;
    onSave?: Function;
    outermostClass?: string;
    fieldClass?: string;
    disabled?: boolean;
    defaultValue?: any;
}