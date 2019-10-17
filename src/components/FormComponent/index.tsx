import * as React from 'react';
import isEqual from 'lodash.isequal';
import { BaseFieldProps } from '../../common/interfaces/CommonProps';
export default class FormComponent<ChildComponent> extends React.Component<BaseFieldProps & ChildComponent, any>{
    constructor(props: BaseFieldProps & ChildComponent, state: any){
        super(props,state);
    }
    componentDidMount(){
        const { defaultValue } = this.props;
        if(defaultValue !== undefined) this.saveToStore(defaultValue);
    }

    componentDidUpdate(oldProps: BaseFieldProps){
        const { defaultValue, onSave, input } = this.props;
        if(!isEqual(oldProps.defaultValue, defaultValue)) this.saveToStore(defaultValue);
        if(!isEqual(oldProps.input.value, input.value) && onSave && typeof onSave === typeof Function) 
            onSave(input.value);
    }

    saveToStore = (data: any)=>{
        const { filter, input } = this.props;
        data = filter && typeof filter === typeof Function? filter(data): data;
        input.onChange(data);
    }
}