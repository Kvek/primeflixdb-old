import { FC, memo } from 'react';

import { IconButton } from '@material-ui/core';

import { SvgPropsInterface } from 'types';

export const IconButtonContainer: FC<SvgPropsInterface> = memo(
  ({ children, onClick }): JSX.Element => (
    <IconButton className="icons" disableRipple onClick={onClick}>
      {children}
    </IconButton>
  )
);

IconButtonContainer.displayName = 'IconButtonContainer';
