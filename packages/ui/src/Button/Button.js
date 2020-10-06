import styled from "styled-components";

/** TEMP: For setting up shared theming & UI with CRA in Monorepo. */

export const Button = styled.button`
    border: 0;
    margin: 0;
    outline: 0;
    padding: 12px 16px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;
`;
