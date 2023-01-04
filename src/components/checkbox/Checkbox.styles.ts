import styled from 'styled-components';

export const CheckboxContainer = styled.input.attrs({ type: 'checkbox' })`
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none;

  /* creating a custom design */
  position: relative;

  width: 1rem;
  height: 1rem;

  margin: 0.25rem 0;

  border: 2px solid var(--color-blue);
  border-radius: 50%;

  cursor: pointer;

  &:not(:checked):hover {
    border-color: var(--color-blue-dark);
  }

  &:checked {
    border-color: var(--color-purple-dark);

    background: var(--color-purple-dark);

    &:before {
      content: '';

      position: absolute;
      top: 15%;
      left: 30%;

      width: 4px;
      height: 6px;

      border: solid white;
      border-width: 0 2px 2px 0;

      transform: rotate(45deg);
    }

    &:hover {
      border-color: var(--color-purple);

      background: var(--color-purple);
    }
  }
`;
