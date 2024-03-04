export interface LabelObject { 
    htmlFor: string, 
    value: any 
}

export type LabelValue = string | LabelObject;

export function instanceOfLabelObject(object: any): boolean {
    return 'htmlFor' in object && 'value' in object;
}

export interface LabelProps {
    value: LabelValue;
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