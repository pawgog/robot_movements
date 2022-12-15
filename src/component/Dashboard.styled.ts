import styled from 'styled-components';
import { colors } from '../utils/colors';

export const Dashboard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${colors.lightGrey};

  & input {
    background-color: ${colors.white};
  }
`;
