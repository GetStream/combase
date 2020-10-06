import "jest-styled-components";
import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { ThemeProvider } from 'styled-components';
import { render } from "@testing-library/react";
import { themes } from '@combase/styles';

import { Button } from ".";

describe("Button", () => {
  const buttonLabel = "Test";
  
  test("renders correctly", () => {
    const { queryByText } = render(<ThemeProvider theme={themes.light}>
      <Button>{buttonLabel}</Button>
    </ThemeProvider>);

    expect(queryByText(buttonLabel)).toBeInTheDocument();
  });
});
