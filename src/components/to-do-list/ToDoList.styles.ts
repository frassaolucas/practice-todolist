import styled from 'styled-components';

interface ListCardProps {
  isCompleted: boolean;
}

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

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  margin-top: 2.375rem;
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);

  .tasks-created {
    color: var(--color-blue);
  }

  .tasks-completed {
    color: var(--color-purple);
  }

  .counter {
    padding: 0.125rem 0.5rem;

    border-radius: 999px;

    background: var(--color-gray-400);
    color: var(--color-gray-200);

    font-size: var(--font-size-smaller);
  }
`;

export const ListEmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 4rem 1.5rem;

  color: var(--color-gray-300);

  text-align: center;

  img {
    margin-bottom: 1rem;
  }
`;

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ListCard = styled.div<ListCardProps>`
  flex: 1;

  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  padding: 1rem;

  border: 1px solid var(--color-gray-400);
  border-radius: 0.5rem;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.86);

  background-color: ${(props) =>
    props.isCompleted ? 'var(--color-gray-500)' : 'var(--color-gray-400)'};
  color: var(--color-gray-100);

  p {
    flex: 1;

    text-decoration: ${(props) =>
      props.isCompleted ? 'line-through' : 'none'};
  }
`;

export const DeleteTaskButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 0.25rem;

  background-color: transparent;

  transition: background-color 0.4s ease;

  svg {
    color: var(--color-gray-300);

    transition: color 0.4s ease;
  }

  &:hover {
    background-color: var(--color-gray-400);

    svg {
      color: var(--color-danger);
    }
  }
`;
