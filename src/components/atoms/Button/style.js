import styled, { css } from 'styled-components';
import { pxToRem } from '../../../utils/scales';
import designSystem from '../../../designSystem';

const variants = {
  default: () => css`
    background-color: ${designSystem.get('colors.secondaryColor')};
    color: #fff;
  `,

  clean: () => css`
    background: none;
    border: 0;
    border-radius: 0;
    color: ${props =>
      props.color ? props.color : designSystem.get('colors.link')};
    font-family: inherit;
    font-size: inherit;
    padding: 0;

    &:hover {
      text-decoration: underline;
    }
  `,

  primary: () => css`
    background-color: ${designSystem.get('colors.primaryColor')};
    color: #fff;

    &:hover {
      background-color: ${designSystem.get('colors.primaryColorLight')};
    }
  `,
};

export const StyledButton = styled.button`
  border: inherit;
  border-radius: 100px;
  cursor: pointer;
  display: inline-block;
  font-size: ${pxToRem(18)};
  font-weight: bold;
  padding: 15px 100px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  ${props => variants[props.variant]} /* stylelint-disable-line */
`;
