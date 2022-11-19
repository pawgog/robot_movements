import { useState, MouseEvent } from 'react';
import * as S from './ControlPanel.styled';
import BoardSize from './BoardSize';
import RobotPosition from './RobotPosition';
import RobotMovement from './RobotMovement';
import { BoardObject, RobotPositionObject } from '../../utils/type';

interface IProps {
  handleBoardSubmitFn: (
    e: MouseEvent<HTMLButtonElement>,
    boardObject: BoardObject
  ) => void;
  handlePositionSubmitFn: (
    e: MouseEvent<HTMLButtonElement>,
    robotPosition: RobotPositionObject
  ) => void;
  handleMoveSubmitFn: (
    e: MouseEvent<HTMLButtonElement>,
    movements: string
  ) => void;
}

function ControlPanel({
  handleBoardSubmitFn,
  handlePositionSubmitFn,
  handleMoveSubmitFn,
}: IProps) {
  const [boardSize, setBoardSize] = useState<number>(2);
  const maxBoardSize = 20;
  const minBoardSize = 2;

  const incrementBoardSize = () => {
    setBoardSize((prev) => (prev === maxBoardSize ? maxBoardSize : prev + 1));
  };

  const decrementBoardSize = () => {
    setBoardSize((prev) => (prev === minBoardSize ? minBoardSize : prev - 1));
  };

  return (
    <S.ControlPanel>
      <h1>Control Panel</h1>
      <BoardSize
        boardSize={boardSize}
        incrementBoardSize={incrementBoardSize}
        decrementBoardSize={decrementBoardSize}
        handleBoardSubmitFn={handleBoardSubmitFn}
      />
      <RobotPosition
        boardSize={boardSize}
        handlePositionSubmitFn={handlePositionSubmitFn}
      />
      <RobotMovement handleMoveSubmitFn={handleMoveSubmitFn} />
    </S.ControlPanel>
  );
}

export default ControlPanel;
