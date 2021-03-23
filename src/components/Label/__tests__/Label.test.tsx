import * as React from 'react';
import { shallow, mount } from 'enzyme';
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

    it('renders correct label and value when object is passed',()=>{
        const app = mount(<Label value={{htmlFor:'myLabel',value:'This is to be shown'}}/>);
        expect(app.find(Label).length).toBe(1);
        expect(app.find('[htmlFor="myLabel"]').length).toBe(1);
        app.unmount();

        const app2 = mount(<Label value='myLabel'/>);
        expect(app2.find(Label).length).toBe(1);
        expect(app2.find('[htmlFor="myLabel"]').length).toBe(1);
        app2.unmount();
    });
});