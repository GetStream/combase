import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Placeholder } from '../Placeholder';

const Root = styled.div`
  display: inline-flex;
  flex-shrink: 0;
  width: ${({ $size }) => $size}rem;
  height: ${({ $size }) => $size}rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.primary};
  background: ${({ theme }) => theme.gradient.primary};
  background-size: cover;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &${Placeholder} {
      background: inherit;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Initials = styled.p`
  color: ${({ theme }) => theme.color.surface};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ $size }) => $size / 2}rem;
  font-weight: 900;
  line-height: ${({ $size }) => $size}rem;
  vertical-align: middle;
  text-align: center;
  user-select: none;
  align-self: center;
  margin: 0;
`;

export const Avatar = memo(({ src, name, color, size, ...props }) => (
    <Root $size={size} as={!src && !name ? Placeholder : 'div'} {...props}>
        {src ? <img alt={name} src={src} /> : <Initials $color={color} $size={size}>{name?.charAt(0) || ""}</Initials>}
    </Root>
));

Avatar.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
  src: PropTypes.string,
};

Avatar.defaultProps = {
  color: 'primary',
  size: 2,
};