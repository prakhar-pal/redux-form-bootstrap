import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import { SelectForm as Select, SelectOption } from '..';

const options: SelectOption[] = [
    {
        label: '1',
        value: 1
    },
    {
        label: '2',
        value: 2
    }
]

describe('Select', () => {
    const notSelectedText = "Select an option!";
    const labelText = {
        htmlFor: "select-name",
        value: "Select a number"
    };
    let wrapper;
    it('renders', () => {
        const labelText = {
            htmlFor: "select-name",
            value: "Select a number"
        };
        wrapper = render(<form><Select options={options} value={1} notSelectedText={notSelectedText} label={labelText}/></form>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.getByTestId("select-option")).toBeInTheDocument();
        expect(wrapper.getByRole("label")).toBeInTheDocument();
    });
    it('has empty default selected state', () => {
        wrapper = render(<form><Select options={options} value={""} notSelectedText={notSelectedText} label={labelText}/></form>);
        const selectEl = wrapper.getByTestId('select-option');
        expect((selectEl as any).value).toBe(""); 
    });

    it('calls onChange function', () => {
        const onChange = jest.fn();
        wrapper = render(<form><Select options={options} value='2' notSelectedText={notSelectedText} label={labelText} onChange={onChange}/></form>)
        userEvent.selectOptions(wrapper.getByTestId('select-option'), options[1].label);
        expect(onChange).toHaveBeenCalledTimes(1);
    })
})