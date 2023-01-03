import { IconProps } from './Icon.types';

import icons from '@/assets/icons/icons.svg';

export const Icon: React.FC<IconProps> = ({
  name,
  width,
  height,
  ...props
}) => {
  return (
    <svg viewBox="0 0 16 16" width={width} height={height} {...props}>
      <use href={`${icons}#icon-${name}`} />
    </svg>
  );
};

Icon.defaultProps = {
  width: 16,
  height: 16,
};
