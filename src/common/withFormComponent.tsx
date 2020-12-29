import * as React from 'react';
import isEqual from 'lodash.isequal';
import { BaseFieldProps } from '../common/interfaces/CommonProps';
import { WrappedFieldProps } from 'redux-form';

export interface InjectedExtraProps extends WrappedFieldProps {
    onChange: (value: any) => void;
    onBlur: () => void;
    value: any;
}

const withFormComponent = <P extends BaseFieldProps>(Component: React.ComponentType<P>) =>
    class FormComponent extends React.Component<BaseFieldProps & P & InjectedExtraProps, any>{
        componentDidMount() {
            const { defaultValue } = this.props;
            if (defaultValue !== undefined) this.saveToStore(defaultValue);
        }

        componentDidUpdate(oldProps: BaseFieldProps & P & InjectedExtraProps) {
            const { defaultValue, onSave, input } = this.props;
            //sync if default value changes
            if (!isEqual(oldProps.defaultValue, defaultValue)) this.saveToStore(defaultValue);
            //sync if value changes from outside
            if (!isEqual(oldProps.input.value, input.value) && onSave && typeof onSave === typeof Function)
                onSave(input.value);
        }

        saveToStore = (data: any) => {
            const { filter, input } = this.props;
            data = filter && typeof filter === typeof Function ? filter(data) : data;
            input.onChange(data);
        }
        render() {
            const { input } = this.props;
            return (
                <Component 
                    {...(this.props as P)} 
                    onChange={this.saveToStore} 
                    onBlur={input.onBlur}
                    value={input.value} 
                />);
        }
    }

export default withFormComponent;