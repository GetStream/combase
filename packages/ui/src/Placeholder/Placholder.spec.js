import "jest-styled-components";
import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { ThemeProvider } from 'styled-components';
import { render } from "@testing-library/react";
import { themes } from '@combase/styles';

import { Placeholder } from ".";

describe("Placeholder", () => {
  test("renders correctly", () => {
    render(
      <ThemeProvider theme={themes.light}>
        <Placeholder />
      </ThemeProvider>
    );
  });
});
