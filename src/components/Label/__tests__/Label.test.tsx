import * as React from 'react';
import { shallow } from 'enzyme';
import { Label } from '../index';
describe('Label',()=>{
    it('renders string',()=>{
        const app = shallow(<Label value="this is a label"/>);
        expect(app).toMatchSnapshot();
    })
    it('renders object',()=>{
        const app = shallow(<Label value={{htmlFor:'myLabel',value:'This is to be shown'}}/>);
        expect(app).toMatchSnapshot();
    })
});