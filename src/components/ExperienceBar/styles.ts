import styled, { css } from 'styled-components';

interface CurrentXPProps {
  width: string;
}

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  > span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;
  }
`;

export const CurrentExperience = styled.div<CurrentXPProps>`
  height: 4px;
  border-radius: 4px;
  background: var(--green);

  > span {
    position: absolute;
    margin-top: 12px;
    transform: translateX(-50%);
    width: 3.5rem;

    ${props =>
      css`
        left: ${props.width};
      `}
  }

  ${props =>
    css`
      width: ${props.width};
    `}
`;
