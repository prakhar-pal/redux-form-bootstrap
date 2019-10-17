import InputBS from './components/Input';
import RadioButtonsBS from './components/RadioButtons';

export { Input , InputProps } from './components/Input';
export { Dropdown, DropdownProps } from './components/Dropdown';
export { Label } from './components/Label';
export { LabelProps } from './common/interfaces/CommonProps';
export { PopupTextarea, PopupTextareaProps } from './components/PopupTextarea';
export { RadioButtons, RadioButtonsProps} from './components/RadioButtons';

const DisconnectedComponents = {
    Input: InputBS,
    RadioButtons: RadioButtonsBS
}
export default DisconnectedComponents;