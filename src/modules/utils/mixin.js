import { css } from 'styled-components';

export const Flex = ({ justify, algin }) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${algin};
`;

export const FlexCenter = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexHCenter = () => css`
  display: flex;
  align-items: center;
`;

export const FlexVCenter = () => css`
  display: flex;
  align-items: center;
`;
