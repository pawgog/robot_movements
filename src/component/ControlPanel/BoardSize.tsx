import { MouseEvent, MouseEventHandler } from 'react';
import * as S from './ControlPanel.styled';
import { TextField, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { BoardObject } from '../../utils/type';

interface IProps {
  boardSize: number;
  incrementBoardSize: MouseEventHandler<HTMLButtonElement>;
  decrementBoardSize: MouseEventHandler<HTMLButtonElement>;
  handleBoardSubmitFn: (
    e: MouseEvent<HTMLButtonElement>,
    boardObject: BoardObject
  ) => void;
}

function BoardSize({
  boardSize,
  incrementBoardSize,
  decrementBoardSize,
  handleBoardSubmitFn,
}: IProps) {
  return (
    <form>
      <S.BoardSizeInputs>
        <TextField type="number" disabled label="rows" value={boardSize} />
        X
        <TextField type="number" disabled label="columns" value={boardSize} />
      </S.BoardSizeInputs>
      <div>
        <IconButton aria-label="add" onClick={incrementBoardSize}>
          <AddIcon />
        </IconButton>
        <IconButton aria-label="remove" onClick={decrementBoardSize}>
          <RemoveIcon />
        </IconButton>
      </div>
      <div>
        <Button
          variant="contained"
          color="success"
          onClick={(e) =>
            handleBoardSubmitFn(e, {
              boardSize: boardSize,
            })
          }
        >
          Create Board
        </Button>
      </div>
    </form>
  );
}

export default BoardSize;
