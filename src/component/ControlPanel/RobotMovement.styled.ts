import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const MovementsBoard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: ${colors.white};
  box-shadow: 0px 0px 4px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

  & > div {
    margin: 0.5rem;

    & h4,
    p {
      margin: 0.4rem 0;
    }

    & > p {
      text-align: left;
      font-size: 0.8rem;
      & > span {
        font-weight: bold;
      }
    }
  }
`;
