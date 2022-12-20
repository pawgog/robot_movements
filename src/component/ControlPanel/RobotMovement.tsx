import { useRef, MouseEvent, useState } from 'react';
import { TextField, Button } from '@mui/material';
import * as S from './RobotMovement.styled';
import { staticText } from '../../utils/staticText';

interface IProps {
  boardSize: number;
  handleMoveSubmitFn: (
    e: MouseEvent<HTMLButtonElement>,
    movements: string
  ) => void;
}

function RobotMovement({ boardSize, handleMoveSubmitFn }: IProps) {
  const [isValid, setIsValid] = useState(false);
  const movementsRef = useRef({ value: '' });

  const isInputValid = (e: any) => {
    const inputValue = e.target.value.toLowerCase();
    const isInputValue =
      [...inputValue].every((val) => /f|r|l/.test(val)) ||
      inputValue.length === 0;

    return setIsValid(!isInputValue);
  };

  return (
    <form>
      <S.MovementsBoard>
        <div>
          <h4>Robot movements</h4>
          <p>
            <span>F</span> - go forward
          </p>
          <p>
            <span>L</span> - turn left
          </p>
          <p>
            <span>R</span> - turn right
          </p>
        </div>
        <div>
          <TextField
            label="movements"
            size="small"
            inputRef={movementsRef}
            error={isValid}
            helperText={isValid ? 'Value is incorrect' : ''}
            // inputProps={{ pattern: '[0-9]' }}
            onChange={(e) => isInputValid(e)}
          />
        </div>
      </S.MovementsBoard>
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
