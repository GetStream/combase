import React from "react";
import styled from "styled-components";
import { colorUtils } from '@combase/styles';

/**
 *! We purposely omit children from the props here so the Placeholder will never render child elements.
 *? Potentially a nicer way to do this.
 */

const ChildlessDiv = ({ children, ...rest }) => <div {...rest} />;

export const Placeholder = styled(ChildlessDiv)`
  animation: placeholder-${({ placeholderColor }) => placeholderColor || "text"}
    1s linear infinite;
  border-radius: ${({ theme }) => theme.borderRadius / 2}px;
  @keyframes placeholder-${({ placeholderColor }) =>
    placeholderColor || "text"} {
    0% {
      background-color: ${({ placeholderColor = "text", theme }) =>
        colorUtils.fade(theme.color[placeholderColor], 0.02)};
    }
    50% {
      background-color: ${({ placeholderColor = "text", theme }) =>
        colorUtils.fade(theme.color[placeholderColor], 0.08)};
    }
    100% {
      background-color: ${({ placeholderColor = "text", theme }) =>
        colorUtils.fade(theme.color[placeholderColor], 0.02)};
    }
  }
`;