import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: var(--color-gray-600);
`;

export const Header = styled.header`
  height: 12.5rem;

  display: flex;
  place-content: center;

  background-color: var(--color-gray-700);

  img {
    max-width: 7.875rem;
    width: 100%;
  }
`;

export const Content = styled.main`
  max-width: 46rem;
  width: 100%;

  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  gap: 0.5rem;

  transform: translateY(-50%);

  input,
  button {
    height: 3.25rem;
  }

  input {
    flex: 1;

    padding: 1rem;

    border: 1px solid var(--color-gray-700);
    border-radius: 0.5rem;

    background-color: var(--color-gray-500);
    color: var(--color-gray-100);

    transition: all 0.4s ease;

    &:active,
    &:focus {
      border-color: var(--color-purple-dark);
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding: 1rem;

    border: 0;
    border-radius: 0.5rem;

    background-color: var(--color-blue-dark);
    color: var(--color-gray-100);

    font-weight: var(--font-weight-bold);

    transition: background-color 0.4s ease;

    &:hover,
    &:active,
    &:focus {
      background-color: var(--color-blue);
    }
  }
`;
