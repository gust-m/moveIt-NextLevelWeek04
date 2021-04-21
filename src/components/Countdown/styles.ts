import styled, { css } from 'styled-components';

interface ButtonProps {
  status: boolean;
  hasFinished: boolean;
}

interface CurrentTimeProps {
  width: string;
}

export const Container = styled.div`
  @media (max-width: 650px) {
    display: flex;
    justify-content: space-around;
    div {
      flex: 1;
    }
  }

  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const Counter = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: var(--white);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  font-size: 8.5rem;
  text-align: center;

  span {
    flex: 1;
  }

  span:first-child {
    border-right: 1px solid #f0f1f3;
  }

  span:last-child {
    border-left: 1px solid #f0f1f3;
  }

  @media (max-width: 760px) {
    font-size: 5.5rem;
  }
`;

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border: 0;
  border-radius: 5px;

  background: var(--blue);
  color: var(--white);

  font-size: 1.25rem;
  font-weight: 600;
  transition: background-color 0.2s;

  outline: none;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  p {
    display: flex;
    margin-left: 16px;

    ${props =>
      props.hasFinished &&
      css`
        color: var(--green);
      `}
  }

  &:not(:disabled):hover {
    background: var(--blue-dark);
  }

  ${props =>
    props.status &&
    css`
      background: var(--white);
      color: var(--title);
      border-radius: 5px 5px 0 0;
      &:not(:disabled):hover {
        background: var(--red);
        color: var(--white);
      }
    `}

  ${props =>
    props.hasFinished &&
    css`
      background: var(--white);
      color: var(--text);
      cursor: not-allowed;
    `}

@media (max-width: 650px) {
    margin-left: 10px;
    max-width: 100%;
    height: 90px;
    margin-top: 1rem;
    flex: 1;

    span {
      p {
        margin-right: 8px;
      }
    }
  }
`;

export const CurrentTime = styled.div<CurrentTimeProps>`
  height: 4px;
  border-radius: 0 0 4px 4px;

  ${props =>
    css`
      right: 0;
      background: var(--green);
      width: ${props.width};
    `}

  @media (max-width: 650px) {
    margin-left: 10px;
  }
`;
