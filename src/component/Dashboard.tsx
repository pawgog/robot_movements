import BoardPanel from './BoardPanel';
import ControlPanel from './ControlPanel';
import * as S from './Dashboard.styled';

function Dashboard() {
  return (
    <S.Dashboard>
      <ControlPanel />
      <BoardPanel />
    </S.Dashboard>
  );
}

export default Dashboard;
