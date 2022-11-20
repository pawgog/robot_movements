import { useState, useRef, ChangeEvent, MouseEvent } from 'react';
import * as S from './ControlPanel.styled';
import {
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Button,
} from '@mui/material';
import { RobotPositionObject } from '../../utils/type';

interface IProps {
  boardSize: number;
  handlePositionSubmitFn: (
    e: MouseEvent<HTMLButtonElement>,
    robotPosition: RobotPositionObject
  ) => void;
}

function RobotPosition({ boardSize, handlePositionSubmitFn }: IProps) {
  const [robotDirectrion, setRobotDirection] = useState<string>('n');
  const xPositionRef = useRef({ value: 0 });
  const yPositionRef = useRef({ value: 0 });

  const handelDirectionPosition = (e: ChangeEvent<HTMLInputElement>) => {
    setRobotDirection(e.target.value);
  };

  return (
    <form>
      <S.RobotPositionInputs>
        <TextField
          type="number"
          InputProps={{
            inputProps: {
              max: boardSize - 1,
              min: 0,
            },
          }}
          label="x position"
          inputRef={xPositionRef}
        />
        <TextField
          type="number"
          InputProps={{
            inputProps: {
              max: boardSize - 1,
              min: 0,
            },
          }}
          label="y position"
          inputRef={yPositionRef}
        />
      </S.RobotPositionInputs>
      <FormControl>
        <FormLabel id="robot-direction">Robot start direction</FormLabel>
        <RadioGroup
          row
          aria-labelledby="robot-direction"
          name="robot-direction-group"
          value={robotDirectrion}
          onChange={(e) => handelDirectionPosition(e)}
        >
          <FormControlLabel value="n" control={<Radio />} label="North" />
          <FormControlLabel value="e" control={<Radio />} label="East" />
          <FormControlLabel value="s" control={<Radio />} label="South" />
          <FormControlLabel value="w" control={<Radio />} label="West" />
        </RadioGroup>
      </FormControl>
      <div>
        <Button
          variant="contained"
          color="success"
          disabled={boardSize <= 1}
          onClick={(e) =>
            handlePositionSubmitFn(e, {
              x: Number(xPositionRef.current.value),
              y: Number(yPositionRef.current.value),
              direction: robotDirectrion,
            })
          }
        >
          Add Robot Start Position
        </Button>
      </div>
    </form>
  );
}

export default RobotPosition;
