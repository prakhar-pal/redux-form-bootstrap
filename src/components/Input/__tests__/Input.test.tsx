import * as React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { InputComponent as Input } from "..";
import userEvent from "@testing-library/user-event";

describe("Input Component", () => {
  it('should render correctly', () => {
    const fn = jest.fn();
    const component = render(<Input type="text" onChange={fn} value="1"/>);
    expect(component).toMatchSnapshot();
  });

  it('calls change event handler', ()=>{
    const handleChange = jest.fn();
    const app = render(<Input type="text" onChange={handleChange}/>);
    userEvent.type(app.getByRole('textbox'), 'a');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('set value correctly',()=>{
    const app = render(<Input type="text" onChange={jest.fn()} value={30}/>);
    expect((app.getByRole('textbox') as any).value).toBe('30');
  })
})
