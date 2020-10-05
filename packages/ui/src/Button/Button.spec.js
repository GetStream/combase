import "jest-styled-components";
import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { render } from "@testing-library/react";

import { Button } from ".";

describe("Button", () => {
  test("renders correctly", () => {
    const { queryByText } = render(<Button>{"Test"}</Button>);

    expect(queryByText("Test")).toBeInTheDocument();
  });
});
