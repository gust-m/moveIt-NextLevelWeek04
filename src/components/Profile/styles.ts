import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin-top: 1rem;

  > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  @media (max-width: 650px) {
    margin-top: 2rem;
  }
`;

export const Description = styled.div`
  margin-left: 1.5rem;

  strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--title);
  }

  p {
    font-size: 1rem;
    margin-top: 0.5rem;

    img {
      margin-right: 0.5rem;
    }
  }
`;
