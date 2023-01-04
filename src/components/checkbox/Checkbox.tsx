import { CheckboxContainer } from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <CheckboxContainer {...props} />;
};
