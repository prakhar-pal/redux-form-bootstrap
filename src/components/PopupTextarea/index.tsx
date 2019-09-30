import * as React from 'react';
import {  Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BaseFieldProps } from '../../common/interfaces/CommonProps';

export interface PopupTextareaProps extends BaseFieldProps{
    defaultValue?: string;    
    buttonLabel: string;
    buttonColor?: string;
    modalClassName?: string;
    modalTitle: any;
    modalBody: string;
    cancelButtonText: string;
    doneButtonText: string;
}

export interface PopupTextareaState{
    isOpen: boolean;
} 

export class PopupTextarea extends React.Component<PopupTextareaProps, any>{

    static defaultProps = {
        buttonColor: 'danger'
    }

    constructor(props: PopupTextareaProps){
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle = ()=> this.setState((oldState: PopupTextareaState)=>({isOpen: !oldState.isOpen}));


    render(){
        const { buttonLabel, buttonColor, modalClassName, modalTitle,
             doneButtonText, cancelButtonText, input} = this.props;
        const { isOpen } = this.state;
        return (
            <React.Fragment>
                <Button color={buttonColor} onClick={this.toggle}>{buttonLabel}</Button>
                <Modal isOpen={isOpen} toggle={this.toggle} className={modalClassName}>
                    <ModalHeader toggle={this.toggle}>{modalTitle}</ModalHeader>
                    <ModalBody>
                        {input.value}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>{doneButtonText}</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>{cancelButtonText}</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}