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
  const maxBoardSize = 20;
  const minBoardSize = 1;

  const handlePositionSubmit = (
    e: MouseEvent<HTMLButtonElement>,
    robotPositionObject: RobotPositionObject
  ) => {
    e.preventDefault();
    setRobotPosition(robotPositionObject);
    setMovements('');
  };

  const handleMoveSubmit = (
    e: MouseEvent<HTMLButtonElement>,
    movements: string
  ) => {
    e.preventDefault();
    setMovements(movements);
  };

  const incrementBoardSize = () => {
    boardObject.boardSize < maxBoardSize &&
      setBoardObject((prev) => ({ ...prev, boardSize: prev.boardSize + 1 }));
  };

  const decrementBoardSize = () => {
    boardObject.boardSize > minBoardSize &&
      setBoardObject((prev) => ({ ...prev, boardSize: prev.boardSize - 1 }));
  };

  return (
    <S.Dashboard>
      <ControlPanel
        boardObject={boardObject}
        handlePositionSubmitFn={handlePositionSubmit}
        handleMoveSubmitFn={handleMoveSubmit}
        incrementBoardSize={incrementBoardSize}
        decrementBoardSize={decrementBoardSize}
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
