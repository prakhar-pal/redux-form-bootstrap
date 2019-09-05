import * as React from "react";
import { shallow } from "enzyme";
import { Input } from "..";
describe("Input", () => {
  it('should render correctly', () => {
    const component = shallow(<Input />);
    expect(component).toMatchSnapshot();
  });
});
