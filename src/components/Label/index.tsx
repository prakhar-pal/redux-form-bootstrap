import * as React from 'react';
import { Label as RSLabel } from 'reactstrap';
import { LabelProps, LabelObject } from '../../common/interfaces/CommonProps';
export const Label: React.FunctionComponent<LabelProps> = function Label(props) {
    const { value, className, onClick } = props;
    const labelInfo = typeof value === typeof "" ?
        { labelFor: value as string, labelValue: value as string } :
            { labelFor: (value as LabelObject).htmlFor, labelValue: (value as LabelObject).value };
    const labelFor = labelInfo && labelInfo.labelFor;
    const labelValue = labelInfo && labelInfo.labelValue;
    return (
        <RSLabel
            for={labelFor.toString()}
            className={className}
            onClick={()=> onClick && onClick()}
        >
            {labelValue}
        </RSLabel>);
}