import * as React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { BaseFieldProps } from '../../common/interfaces/CommonProps';

export interface DropdownOption{
    value: string, 
    type: 'header' | 'disabled' | 'divider' 
}
export interface DropdownProps extends BaseFieldProps{
    defaultValue?: any;
    input: any;
    isCaret?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger',
    text: string;
    options: DropdownOption[];
    size: 'lg' | 'sm',
    direction: 'up' | 'down' | 'left' | 'right'
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

    constructor(props: DropdownProps){
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle = ()=> this.setState((oldState: { isOpen: any; })=> ({isOpen: !oldState.isOpen}))

    saveToStore = ( data : string)=>{
        const { filter, input } = this.props;
        data = filter && typeof filter === typeof Function ? filter(data): data;
        input.onChange(data);
    }

    render(){
        const { isCaret, color, options, text, size, direction } = this.props;
        const { isOpen } = this.state;
        return (
            <ButtonDropdown isOpen={isOpen} toggle={this.toggle} direction={direction}>
            <DropdownToggle caret={isCaret} color={color} size={size}>
              {text}
            </DropdownToggle>
            <DropdownMenu>
                {options && Array.isArray(options) ? 
                options.map( option => {
                    const types = Dropdown.DROPDOWN_TYPE;
                    const handler = ()=> this.saveToStore(option.value);
                    switch(option.type){
                        case types.DISABLED:
                            return <DropdownItem onClick={handler} disabled >{option.value}</DropdownItem>;
                        case types.DIVIDER:
                            return <DropdownItem  onClick={handler} divider>{option.value}</DropdownItem>;
                        case types.HEADER:
                                return <DropdownItem  onClick={handler} header>{option.value}</DropdownItem>;
                        default:
                            return <DropdownItem  onClick={handler}>{option.value}</DropdownItem>;
                            
                    }
                }): null}
            </DropdownMenu>
          </ButtonDropdown>
        )
    }
}