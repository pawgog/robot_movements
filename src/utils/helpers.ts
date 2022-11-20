import { BoardObject, RobotPositionObject } from './type';

export const calculateRobotMovements = (
  boardObject: BoardObject,
  robotPosition: RobotPositionObject,
  movements: string
) => {
  const { x, y, direction } = robotPosition;

  const directionToNumber: any = {
    n: 0,
    e: 1,
    s: 2,
    w: 3,
  };
  const directionToString: any = {
    0: 'n',
    1: 'e',
    2: 's',
    3: 'w',
  };
  let moveLength = movements.length;
  let countUp = y;
  let countLeft = x;
  let robotDirection = directionToNumber[direction];
  const arrayMovements = [];

  for (let i = 0; i < moveLength; i++) {
    switch (movements[i]) {
      case 'R':
        arrayMovements.push({ move: movements[i], isMove: true });
        if (robotDirection === 3) {
          robotDirection = 0;
        } else {
          robotDirection++;
        }
        break;
      case 'L':
        arrayMovements.push({ move: movements[i], isMove: true });
        if (robotDirection === 0) {
          robotDirection = 3;
        } else {
          robotDirection--;
        }
        break;
      case 'F':
        let num = 0;
        switch (robotDirection) {
          case 0:
            num = countUp - 1;
            if (num >= 0) {
              countUp--;
              arrayMovements.push({ move: movements[i], isMove: true });
            } else {
              arrayMovements.push({ move: movements[i], isMove: false });
            }
            break;
          case 1:
            num = countLeft + 1;
            if (num < boardObject.boardSize) {
              countLeft++;
              arrayMovements.push({ move: movements[i], isMove: true });
            } else {
              arrayMovements.push({ move: movements[i], isMove: false });
            }
            break;
          case 2:
            num = countUp + 1;
            if (num < boardObject.boardSize) {
              countUp++;
              arrayMovements.push({ move: movements[i], isMove: true });
            } else {
              arrayMovements.push({ move: movements[i], isMove: false });
            }
            break;
          case 3:
            num = countLeft - 1;
            if (num >= 0) {
              countLeft--;
              arrayMovements.push({ move: movements[i], isMove: true });
            } else {
              arrayMovements.push({ move: movements[i], isMove: false });
            }
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }

  return {
    x: countLeft,
    y: countUp,
    direction: directionToString[robotDirection],
    arrayMovements,
  };
};
