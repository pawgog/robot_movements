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
  const [isDisabled, setIsDisabled] = useState(true);
  const movementsRef = useRef({ value: '' });

  const handleInputValue = (value: string, regex: string) => {
    const validationResult = checkIsInputValid(value, regex);
    setIsDisabled(
      validationResult ||
        movementsRef.current.value.length === 0 ||
        boardSize <= 1
    );
    setIsValid(validationResult);
  };

  return (
    <form>
      <S.MovementsBoard>
        <div>
          <h4>{staticText.robotMovements}</h4>
          <p>
            <span>F</span> - {staticText.goForward}
          </p>
          <p>
            <span>L</span> - {staticText.turnLeft}
          </p>
          <p>
            <span>R</span> - {staticText.turnRight}
          </p>
        </div>
        <div>
          <TextField
            label="movements"
            size="small"
            inputRef={movementsRef}
            error={isValid}
            helperText={isValid ? `${staticText.validationWarning}` : ''}
            onChange={(e) => handleInputValue(e.target.value, 'f|r|l')}
          />
        </div>
      </S.MovementsBoard>
      <div>
        <Button
          variant="contained"
          color="success"
          disabled={isDisabled}
          onClick={(e) => handleMoveSubmitFn(e, movementsRef.current.value)}
        >
          {staticText.runRobot}
        </Button>
      </div>
    </form>
  );
}

export default RobotMovement;
