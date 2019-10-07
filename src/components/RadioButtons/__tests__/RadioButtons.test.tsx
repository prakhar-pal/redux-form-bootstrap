import * as React from 'react';
import { shallow } from 'enzyme';
import RadioButtons from '..';
describe('RadioButtons',()=>{
    it('renders',()=>{
        const fn = jest.fn();
        const app = shallow(<RadioButtons options={[]} onChange={fn}/>);
        expect(app).toMatchSnapshot();
    });
    it('handles onChange',()=>{
        const fn = jest.fn();
        const app = shallow(<RadioButtons options={['Red', 'Blue','Green', 'Black']} onChange={fn}/>);
        app.find('input').at(1).simulate('click');
        expect(fn.call.length).toBe(1);
    });
});