import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Dropdown } from '..';
import { DropdownOption } from "..";

export const options: DropdownOption[] = [
    {value: "You haven't selected a name yet!", type: "disabled"},
    {value: "Karen", type: "header"},
    {type: "divider"},
    {value: "Gillian", type: "header"},
    {type: "divider"},
    {value: "Bucky", type: "header"},
    {type: "divider"},
    {value: "Bikrum", type: "header"},
    {type: "divider"}
]


describe('Dropdown Component', () => {

    it('renders', () => {
        const fn = jest.fn();
        const app = shallow(
            <Dropdown
                text="Select a name"
                options={options}
                onChange={fn}
            />);
        expect(app).toMatchSnapshot();
    });

    it('has a single .btn-group', () => {
        const fn = jest.fn();
        const app = mount(
            <Dropdown
                text="Select a name"
                options={options}
                onChange={fn}
            />);
        expect(app.find('.btn-group').length).toBe(1);
    });

    it('handles onChange', () => {
        const fn = jest.fn();
        const app = mount(
            <Dropdown
                text="Select a name"
                options={options}
                onChange={fn}
            />);
        app.find('.btn-group').simulate('click');
        expect(fn.call.length).toBe(1);
    });
});