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

  for (let i = 0; i < moveLength; i++) {
    switch (movements[i]) {
      case 'R':
        if (robotDirection === 3) {
          robotDirection = 0;
        } else {
          robotDirection++;
        }
        break;
      case 'L':
        if (robotDirection === 3) {
          robotDirection = 0;
        } else {
          robotDirection--;
        }
        break;
      case 'F':
        if (robotDirection === 0) countUp--;
        if (robotDirection === 1) countLeft++;
        if (robotDirection === 2) countUp++;
        if (robotDirection === 3) countLeft--;
        break;
      default:
        break;
    }
  }

  return {
    x: countLeft,
    y: countUp,
    direction: directionToString[robotDirection],
  };
};
