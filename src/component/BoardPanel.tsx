import * as S from './BoardPanel.styled';
import { v4 as uuidv4 } from 'uuid';
import { Grid } from '@mui/material';
import {
  BoardObject,
  RobotPositionObject,
  RobotMovementsObject,
} from '../utils/type';
import { calculateRobotMovements } from '../utils/helpers';

interface IProps {
  boardObject: BoardObject;
  robotPosition: RobotPositionObject;
  movements: string;
}

function BoardPanel({ boardObject, robotPosition, movements }: IProps) {
  const { boardSize } = boardObject;
  const { x, y, direction, arrayMovements } = calculateRobotMovements(
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
            <Grid item key={uuidv4()}>
              {index === calcRobotPosition && x >= 0 ? (
                <S.PaperStyled>
                  <S.RobotIcon $direction={direction} />
                </S.PaperStyled>
              ) : (
                <S.PaperStyled />
              )}
            </Grid>
          ))}
        </Grid>
      </S.BoxStyled>
      <S.RobotMovePanel>
        {Object.keys(arrayMovements).map((key: string) => {
          const robotMove =
            arrayMovements[key as keyof Array<RobotMovementsObject> | any];
          return robotMove.isMove ? (
            <S.RobotMove key={uuidv4()} $isRobotMove={robotMove.isMove}>
              {robotMove.move}
            </S.RobotMove>
          ) : (
            <S.RobotMove key={uuidv4()} $isRobotMove={robotMove.isMove}>
              {robotMove.move}
            </S.RobotMove>
          );
        })}
        {x > -1 && y > -1 ? (
          <div>
            Current robot position: ({x}, {y}, {direction.toUpperCase()})
          </div>
        ) : null}
      </S.RobotMovePanel>
    </S.BoardPanel>
  );
}

export default BoardPanel;
