import styled from 'styled-components';
import { Box, Paper } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

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
    color: ${$isRobotMove ? '#2e7d32' : '#d32f2f'}};
    padding: 0 .2rem;
    font-size: 1.2rem;
    font-weight: bold;
  `
);

export const RobotIcon = styled(ArrowUpwardIcon)<{ $direction: string }>(
  ({ $direction }) => `
  transform: ${
    ($direction === 'n' && 'rotate(0deg)') ||
    ($direction === 'e' && 'rotate(90deg)') ||
    ($direction === 's' && 'rotate(180deg)') ||
    ($direction === 'w' && 'rotate(270deg)')
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
