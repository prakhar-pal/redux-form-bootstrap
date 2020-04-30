import * as React from 'react';
import isEqual from 'lodash.isequal';
import { BaseFieldProps } from '../common/interfaces/CommonProps';

export interface InjectedExtraProps{
    onChange: (value: any) => void;
}


const withFormComponent = <P extends InjectedExtraProps>(Component: React.ComponentType<P>) =>
    class FormComponent extends React.Component<BaseFieldProps & P, any>{
        constructor(props: BaseFieldProps & P, state: any) {
            super(props, state);
        }
        componentDidMount() {
            const { defaultValue } = this.props;
            if (defaultValue !== undefined) this.saveToStore(defaultValue);
        }

        componentDidUpdate(oldProps: BaseFieldProps) {
            const { defaultValue, onSave, input } = this.props;
            if (!isEqual(oldProps.defaultValue, defaultValue)) this.saveToStore(defaultValue);
            if (!isEqual(oldProps.input.value, input.value) && onSave && typeof onSave === typeof Function)
                onSave(input.value);
        }

        saveToStore = (data: any) => {
            const { filter, input } = this.props;
            data = filter && typeof filter === typeof Function ? filter(data) : data;
            input.onChange(data);
        }
        render() {
            return (<Component {...(this.props as P)} onChange={this.saveToStore}/>);
        }
    }

export default withFormComponent;