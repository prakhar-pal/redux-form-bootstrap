import * as React from 'react';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import withFormComponent from '../../common/withFormComponent';
import { BaseFieldProps } from '../../common/interfaces/CommonProps';
import { Label } from '../Label';

export const RADIO_BUTTONS_DIRECTIONS = {
    HORIZONTAL: "horizontal",
    VERTICAL: "vertical"
}
export interface RadioButtonsProps extends BaseFieldProps {
    options: string[];
    noLabel?: boolean;
    label?: string | { htmlFor: string, value: any }
    value: any;
    onChange: (value: string) => void;
    onBlur: () => void;
    direction?: string
}
export class RadioButtonsForm extends React.Component<RadioButtonsProps, any>{
    static defaultProps = {
        direction: "vertical"
    }
    render() {
        const { options, noLabel, label, onChange, value, direction, ...rest } = this.props;
        const radioButtons = options && Array.isArray(options) ?
            options.map((option, index) => (
                <Row key={option} className={classnames({ "ml-4": index != 0 && direction !== RADIO_BUTTONS_DIRECTIONS.VERTICAL })}>
                    <div key={option} >
                        <input type="radio" value={option}
                            checked={value === option}
                            {...rest}
                            onClick={() => onChange(option)}
                        />
                    </div>
                    <Label value={option} className="ml-1"
                        onClick={() => onChange(option)} />
                </Row>)) : null;
        return (
            <React.Fragment>
                {!noLabel && label ? <Label value={label} /> : null}
                {direction === RADIO_BUTTONS_DIRECTIONS.HORIZONTAL ? (
                    <Row className="ml-3">
                        {radioButtons}
                    </Row>) : (
                        <Col>
                            {radioButtons}
                        </Col>
                    )}
            </React.Fragment>
        )
    }
}

export default withFormComponent(RadioButtonsForm);
