import { useRef, MouseEvent } from 'react';
import { TextField, Button } from '@mui/material';

interface IProps {
  handleMoveSubmitFn: (
    e: MouseEvent<HTMLButtonElement>,
    movements: string
  ) => void;
}

function RobotMovement({ handleMoveSubmitFn }: IProps) {
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
          onClick={(e) => handleMoveSubmitFn(e, movementsRef.current.value)}
        >
          Run Robot
        </Button>
      </div>
    </form>
  );
}

export default RobotMovement;
