import { Grid } from '@mui/material';
import * as S from './BoardPanel.styled';
import { BoardObject, RobotPositionObject } from '../utils/type';
import { calculateRobotMovements } from '../utils/helpers';

interface IProps {
  boardObject: BoardObject;
  robotPosition: RobotPositionObject;
  movements: string;
}

function BoardPanel({ boardObject, robotPosition, movements }: IProps) {
  const { boardSize } = boardObject;
  const { x, y, direction } = calculateRobotMovements(
    boardObject,
    robotPosition,
    movements
  );
  const boardSquares = boardSize * boardSize;
  const calcRobotPosition = x + y * boardSize;

  return (
    <S.BoardPanel>
      <h1>Board Panel</h1>
      <S.BoxStyled>
        <Grid
          container
          sx={{
            display: 'grid',
            gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
          }}
        >
          {Array.from(Array(boardSquares)).map((_, index) => (
            <Grid item key={index}>
              {index === calcRobotPosition && x >= 0 ? (
                <S.PaperStyled>R {direction}</S.PaperStyled>
              ) : (
                <S.PaperStyled />
              )}
            </Grid>
          ))}
        </Grid>
      </S.BoxStyled>
    </S.BoardPanel>
  );
}

export default BoardPanel;
