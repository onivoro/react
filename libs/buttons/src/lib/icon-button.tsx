import { PropsWithChildren, FC } from 'react';
import Button, { TButtonProps } from './button';
import styled from 'styled-components';


export const IconButton: FC<PropsWithChildren<TButtonProps>> = styled(Button)`
    padding-left: .5rem;
    padding-right: .5rem;
`;

export default IconButton;
