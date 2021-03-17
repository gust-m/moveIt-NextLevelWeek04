import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import { Container } from './styles';

const CompletedChallenges: React.FC = () => {
  // challenges complestes
  const { challengesCompleted } = useContext(ChallengeContext);
  return (
    <Container>
      <span>Completed Challenges</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
};

//teste

export default CompletedChallenges;
