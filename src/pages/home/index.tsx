import Head from 'next/head';

import { GetServerSideProps } from 'next';

import Cookies from 'js-cookie';
import { Container, FlexContent } from '../../styles/home/styles';

import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
import CompletedChallenges from '../../components/CompletedChallenges';
import Countdown from '../../components/Countdown';
import ChallengeBox from '../../components/ChallengeBox';
import Sidebar from '../../components/Sidebar';

import { CountdownProvider } from '../../contexts/CountdownContext';
import { ChallengesProvider } from '../../contexts/ChallengeContext';
import { SidebarProvider } from '../../contexts/SidebarContext';

interface CtxProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  totalExperience: number;
}

const Home: React.FC<CtxProps> = ({
  level,
  currentExperience,
  challengesCompleted,
  totalExperience,
}: CtxProps) => {
  const user = Cookies.get('username');
  console.log(user);
  return (
    <ChallengesProvider
      totalExperience={totalExperience}
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <FlexContent>
        <SidebarProvider>
          <Sidebar />
        </SidebarProvider>
        <Container>
          <Head>
            <title>Home | move.it</title>
          </Head>

          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </Container>
      </FlexContent>
    </ChallengesProvider>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const {
    level,
    username,
    currentExperience,
    challengesCompleted,
    totalExperience,
  } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      username,
      totalExperience: Number(totalExperience),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
