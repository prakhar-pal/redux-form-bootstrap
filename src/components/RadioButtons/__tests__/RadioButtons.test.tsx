import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioButtonsForm } from '..';
describe('RadioButtons',()=>{
    it('renders',()=>{
        const fn = jest.fn();
        const app = render(<RadioButtonsForm options={["Red"]} onChange={fn} onBlur={jest.fn()} value=""/>);
        expect(app).toMatchSnapshot();
    });
    it('handles onChange',()=>{
        const handleChange = jest.fn();
        const radioBtnLabel = 'Color options';
        render(<RadioButtonsForm options={['Red', 'Blue','Green', 'Black']} onChange={handleChange} label={radioBtnLabel}/>);
        const el = document.querySelector('[value="Red"]');
        el && userEvent.click(el);
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
});