import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Label } from '../index';
describe('Label',()=>{
    it('renders string',()=>{
        const app = render(<Label value="this is a label"/>);
        expect(app).toMatchSnapshot();
    })
    it('renders object',()=>{
        const app = render(<Label value={{htmlFor:'myLabel',value:'This is to be shown'}}/>);
        expect(app).toMatchSnapshot();
    })

    it('renders correct label and value when object is passed',()=>{
        const labelText = 'This is to be shown';
        const app = render(<Label value={{htmlFor:'myLabel',value: labelText}}/>);
        expect(app.getByText(labelText)).toBeInTheDocument();
        expect(document.querySelector('[for="myLabel"]')).toBeInTheDocument();
    });

    it('render text label', () => {
        const app = render(<Label value='myLabel'/>);
        expect(app.getByText('myLabel')).toBeInTheDocument();
        expect(document.querySelector('[for="myLabel"]')).toBeInTheDocument();
    })
});