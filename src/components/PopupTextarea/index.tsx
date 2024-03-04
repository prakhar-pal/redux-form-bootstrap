import * as React from 'react';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import withFormComponent from '../../common/withFormComponent';
import { BaseFieldProps } from '../../common/interfaces/CommonProps';

export interface PopupTextareaProps extends BaseFieldProps {
    buttonLabel: string;
    buttonColor?: string;
    modalClassName?: string;
    modalTitle: any;
    modalBody: string;
    cancelButtonText: string;
    doneButtonText: string;
    value: any; 
    onChange: (value: any) => void;
    onBlur: () => void;
}

export interface PopupTextareaState {
    isOpen: boolean;
    currentValue: any;
}

export class PopupTextareaForm extends React.Component<PopupTextareaProps, PopupTextareaState>{

    static defaultProps = {
        buttonColor: 'danger',
        doneButtonText: 'Ok',
        cancelButtonText: 'Cancel'
    }

    constructor(props: PopupTextareaProps) {
        super(props);
        this.state = {
            isOpen: false,
            currentValue: null
        }
    }

    toggle = () => this.setState((oldState: PopupTextareaState) => ({ 
        isOpen: !oldState.isOpen, 
        currentValue: oldState.isOpen ? null: this.props.value
    }));

    handleOnChange = (e: any)=>{
        const { value } = e.target;
        console.log('changed value: ',value);
        this.setState({ currentValue: value });
    }

    handleClickDone = () => {
        const { onChange } = this.props;
        const { currentValue } = this.state;
        onChange(currentValue);
        this.toggle();
    }

    render() {
        const { buttonLabel, buttonColor, modalClassName, modalTitle,
            doneButtonText, cancelButtonText } = this.props;
        const { isOpen, currentValue } = this.state;
        return (
            <React.Fragment>
                <Button color={buttonColor} onClick={this.toggle}>{buttonLabel}</Button>
                <Modal isOpen={isOpen} toggle={this.toggle} className={modalClassName}>
                    <ModalHeader toggle={this.toggle}>{modalTitle}</ModalHeader>
                    <ModalBody>
                        <Input
                            type="textarea"
                            value={currentValue}
                            onChange={this.handleOnChange}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleClickDone}>{doneButtonText}</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>{cancelButtonText}</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}

export default withFormComponent(PopupTextareaForm);