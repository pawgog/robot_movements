import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const MovementsBoard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: ${colors.white};

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
