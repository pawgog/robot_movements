import { useState, MouseEvent } from 'react';
import * as S from './Dashboard.styled';
import BoardPanel from './BoardPanel';
import ControlPanel from './ControlPanel/ControlPanel';
import { BoardObject, RobotPositionObject } from '../utils/type';

function Dashboard() {
  const [boardObject, setBoardObject] = useState<BoardObject>({ boardSize: 1 });
  const [robotPosition, setRobotPosition] = useState<RobotPositionObject>({
    x: -1,
    y: -1,
    direction: 'n',
  });
  const [movements, setMovements] = useState<string>('');

  const handleBoardSubmit = (
    e: MouseEvent<HTMLButtonElement>,
    boardObject: BoardObject
  ) => {
    e.preventDefault();
    setBoardObject(boardObject);
  };

  const handlePositionSubmit = (
    e: MouseEvent<HTMLButtonElement>,
    robotPositionObject: RobotPositionObject
  ) => {
    e.preventDefault();
    setRobotPosition(robotPositionObject);
  };

  const handleMoveSubmit = (
    e: MouseEvent<HTMLButtonElement>,
    movements: string
  ) => {
    e.preventDefault();
    setMovements(movements);
  };

  return (
    <S.Dashboard>
      <ControlPanel
        handleBoardSubmitFn={handleBoardSubmit}
        handlePositionSubmitFn={handlePositionSubmit}
        handleMoveSubmitFn={handleMoveSubmit}
      />
      <BoardPanel
        boardObject={boardObject}
        robotPosition={robotPosition}
        movements={movements}
      />
    </S.Dashboard>
  );
}

export default Dashboard;
