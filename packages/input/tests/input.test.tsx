import * as React from "react";
import { Input } from "../src";
import { render } from "enzyme";
import "jest";

describe("Input", () => {
  it("Input 1", () => {
    const component = render(<Input/>);
    expect(component).toMatchSnapshot();
  });
});
