import * as React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { BaseFieldProps } from '../../common/interfaces/CommonProps';
import withFormComponent from "../../common/withFormComponent";

export interface DropdownOption {
    value?: string,
    type?: 'header' | 'disabled' | 'divider'
}

export interface DropdownProps extends BaseFieldProps {
    isCaret?: boolean;
    // color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger',
    color?: string;
    text: string;
    options: DropdownOption[];
    // size: 'lg' | 'sm',
    size?: string;
    // direction: 'up' | 'down' | 'left' | 'right'
    direction?: string;
    onChange?: Function;
}

export interface RFDropdownState {
    isOpen: boolean;
}

export class Dropdown extends React.Component<DropdownProps, RFDropdownState>{

    static defaultProps = {
        isCaret: true,
        color: 'info',
        size: 'sm',
        direction: 'down'
    }

    static DROPDOWN_TYPE = {
        HEADER: 'header',
        DISABLED: 'disabled',
        DIVIDER: 'divider',
    }

    constructor(props: DropdownProps) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle = () => this.setState(oldState => ({ isOpen: !oldState.isOpen }))

    saveToStore = (data: string) => {
        const { filter, onChange } = this.props;
        data = filter && typeof filter === typeof Function ? filter(data) : data;
        onChange && onChange(data);
    }

    render() {
        const { isCaret, color, options, text, size, direction } = this.props;
        const { isOpen } = this.state;
        return (
            <ButtonDropdown isOpen={isOpen} toggle={this.toggle} direction={direction as any}>
                <DropdownToggle caret={isCaret} color={color} size={size}>
                    {text}
                </DropdownToggle>
                <DropdownMenu>
                    {options && Array.isArray(options) ?
                        options.map((option, index) => {
                            const types = Dropdown.DROPDOWN_TYPE;
                            const handler = () => option.value !== undefined && this.saveToStore(option.value);
                            return (
                                <DropdownItem
                                    onClick={handler}
                                    key={`${option.value|| 'DropdownItem'}_${index}`}
                                    disabled={option.type === types.DISABLED}
                                    divider={option.type === types.DIVIDER}
                                    header={option.type === types.HEADER}
                                >
                                    {option.value}
                                </DropdownItem>
                            );
                        }) : null}
                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}

export default withFormComponent(Dropdown);