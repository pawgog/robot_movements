import { useState, useRef, MouseEvent } from 'react';
import { TextField, Button } from '@mui/material';
import * as S from './RobotMovement.styled';
import { checkIsInputValid } from '../../utils/helpers';
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

  const handleInputValue = (value: string, regex: string) => {
    const validationResult = checkIsInputValid(value, regex);
    setIsValid(validationResult);
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
            onChange={(e) => handleInputValue(e.target.value, '/f|r|l/')}
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
