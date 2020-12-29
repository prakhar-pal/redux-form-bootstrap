import * as React from "react";
import { shallow } from "enzyme";
import { Input as RSInput } from 'reactstrap';
import { InputComponent as Input } from "..";

describe("Input Component", () => {
  it('should render correctly', () => {
    const fn = jest.fn();
    const component = shallow(<Input type="text" onChange={fn} value="1"/>);
    expect(component).toMatchSnapshot();
  });

  it('has only one instance of reactstrap\'s Input ', () => {
    const fn = jest.fn();
    const app = shallow(<Input type="text" onChange={fn}/>);
    expect(app.find(RSInput).length).toBe(1);
  });

  it('calls change event handler', ()=>{
    const fn = jest.fn();
    const app = shallow(<Input type="text" onChange={fn}/>);
    app.find(RSInput).simulate('change', { target: { value: 30} });
    expect(fn.call.length).toBe(1);
  });

  it('set value correctly',()=>{
    const fn = jest.fn();
    const app = shallow(<Input type="text" onChange={fn} value={30}/>);
    app.find(RSInput).simulate('change', { target: { value: 30} });
    expect(fn.call.length).toBe(1);
  })
})
