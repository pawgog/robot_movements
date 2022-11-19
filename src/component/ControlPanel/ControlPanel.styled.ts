import styled from 'styled-components';

export const ControlPanel = styled.div`
  width: 30%;
  padding: 1rem;
  margin: 0 auto;

  & form {
    margin: 1rem 0;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid grey;
    text-align: center;

    & > div {
      margin: 1rem 0;
    }
  }
`;

export const BoardSizeInputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    margin: 0 4px;
  }
`;

export const RobotPositionInputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > div {
    width: 50%;
  }
`;
