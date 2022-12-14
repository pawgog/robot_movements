import styled from 'styled-components';
import { Box, Paper } from '@mui/material';
import { colors } from '../utils/colors';

export const BoardPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  padding: 1rem;
  text-align: center;
`;

export const RobotMovePanel = styled.div`
  margin: 1rem 0;
`;

export const RobotMove = styled.span<{ $isRobotMove: boolean }>(
  ({ $isRobotMove }) => `
    color: ${$isRobotMove ? `${colors.green}` : `${colors.red}`}};
    padding: 0 .2rem;
    font-size: 1.2rem;
    font-weight: bold;
  `
);

export const IconsBoard = styled.div<{ $direction: string }>(
  ({ $direction }) => `
  transform: ${
    ($direction === 's' && 'rotate(0deg);') ||
    ($direction === 'w' && 'rotate(90deg);') ||
    ($direction === 'n' && 'rotate(180deg);') ||
    ($direction === 'e' && 'rotate(270deg);')
  }
  position: relative;
  & svg {
    position: absolute;
    top: -20px;
    left: -12px;
    right: 0;
    bottom: 0;

    &:first-child {
      top: -6px;
    }
  }
`
);

export const BoxStyled = styled(Box)`
  width: 55%;
`;

export const PaperStyled = styled(Paper)`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
`;
