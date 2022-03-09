import * as React from "react";
import { Button } from "../src";
import { render } from "enzyme";
import "jest";

describe("Button", () => {
  it("Button render", () => {
    const component = render(<Button>abc</Button>);
    expect(component).toMatchSnapshot();
  });

  it("Button children", () => {
    const component = render(<Button>abc</Button>);
    expect(component.text()).toBe("abc");
  });
});
