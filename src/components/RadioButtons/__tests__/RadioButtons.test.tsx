import * as React from 'react';
import { shallow } from 'enzyme';
import { RadioButtonsForm } from '..';
describe('RadioButtons',()=>{
    it('renders',()=>{
        const fn = jest.fn();
        const app = shallow(<RadioButtonsForm options={["Red"]} onChange={fn} onBlur={jest.fn} value=""/>);
        expect(app).toMatchSnapshot();
    });
    it('handles onChange',()=>{
        const fn = jest.fn();
        const app = shallow(<RadioButtonsForm options={['Red', 'Blue','Green', 'Black']} onChange={fn}/>);
        app.find('input').at(1).simulate('click');
        expect(fn.call.length).toBe(1);
    });
});