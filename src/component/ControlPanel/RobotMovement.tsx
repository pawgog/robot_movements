import { useRef, MouseEvent } from 'react';
import { TextField, Button } from '@mui/material';
import { staticText } from '../../utils/staticText';

interface IProps {
  boardSize: number;
  handleMoveSubmitFn: (
    e: MouseEvent<HTMLButtonElement>,
    movements: string
  ) => void;
}

function RobotMovement({ boardSize, handleMoveSubmitFn }: IProps) {
  const movementsRef = useRef({ value: '' });

  return (
    <form>
      <div>
        <TextField label="movements" inputRef={movementsRef} />
      </div>
      <div>
        <Button
          variant="contained"
          color="success"
          disabled={boardSize <= 1}
          onClick={(e) => handleMoveSubmitFn(e, movementsRef.current.value)}
        >
          {staticText.runRobot}
        </Button>
      </div>
    </form>
  );
}

export default RobotMovement;
