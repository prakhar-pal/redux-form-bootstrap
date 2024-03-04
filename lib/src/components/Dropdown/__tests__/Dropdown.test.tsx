import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
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
        const app = render(
            <Dropdown
                text="Select a name"
                options={options}
                onChange={jest.fn()}
            />);
        expect(app).toMatchSnapshot();
    });

    // it('handles onChange', () => {
    //     const handleChange = jest.fn();
    //     render(
    //         <Dropdown
    //             text="Select a name"
    //             options={options}
    //             onChange={handleChange}
    //         />);
    //     const btnGroupEl = document.querySelector('.btn-group');
    //     btnGroupEl && userEvent.click(btnGroupEl);
    //     expect(handleChange).toHaveBeenCalledTimes(1);
    // });
});