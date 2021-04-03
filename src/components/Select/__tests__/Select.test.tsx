import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
// import { Input } from 'reactstrap';
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
    let wrapper: ShallowWrapper;
    beforeAll(() => {
        wrapper = shallow(<Select options={options} value={1}/>);
    });
    it('renders', () => {
        expect(wrapper).toMatchSnapshot();
    });
})