import { MouseEventHandler } from 'react';
import * as S from './ControlPanel.styled';
import { TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface IProps {
  boardSize: number;
  incrementBoardSize: MouseEventHandler<HTMLButtonElement>;
  decrementBoardSize: MouseEventHandler<HTMLButtonElement>;
}

function BoardSize({
  boardSize,
  incrementBoardSize,
  decrementBoardSize,
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
    </form>
  );
}

export default BoardSize;
