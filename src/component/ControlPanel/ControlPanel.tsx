import { MouseEvent, MouseEventHandler } from 'react';
import * as S from './ControlPanel.styled';
import BoardSize from './BoardSize';
import RobotPosition from './RobotPosition';
import RobotMovement from './RobotMovement';
import { BoardObject, RobotPositionObject } from '../../utils/type';

interface IProps {
  boardObject: BoardObject;
  handlePositionSubmitFn: (
    e: MouseEvent<HTMLButtonElement>,
    robotPosition: RobotPositionObject
  ) => void;
  handleMoveSubmitFn: (
    e: MouseEvent<HTMLButtonElement>,
    movements: string
  ) => void;
  incrementBoardSize: MouseEventHandler<HTMLButtonElement>;
  decrementBoardSize: MouseEventHandler<HTMLButtonElement>;
}

function ControlPanel({
  boardObject,
  handlePositionSubmitFn,
  handleMoveSubmitFn,
  incrementBoardSize,
  decrementBoardSize,
}: IProps) {
  const { boardSize } = boardObject;

  return (
    <S.ControlPanel>
      <h1>Control Panel</h1>
      <BoardSize
        boardSize={boardSize}
        incrementBoardSize={incrementBoardSize}
        decrementBoardSize={decrementBoardSize}
      />
      <RobotPosition
        boardSize={boardSize}
        handlePositionSubmitFn={handlePositionSubmitFn}
      />
      <RobotMovement
        boardSize={boardSize}
        handleMoveSubmitFn={handleMoveSubmitFn}
      />
    </S.ControlPanel>
  );
}

export default ControlPanel;
