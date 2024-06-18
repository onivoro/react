import { ComponentProps, PropsWithChildren, FC } from 'react';
import { styled } from 'styled-components';

export type TButtonProps = ComponentProps<'button'> & { variant: string };

export const Button: FC<PropsWithChildren<TButtonProps>> = styled.button`
align-items: center;
background-color: ${({variant}) => `var(--button-${variant}-surface)`};
border-color: ${({variant}) => `var(--button-${variant}-outline)`};
border-radius: 9999px;
border-style: solid;
border-width: 1px;
color: ${({variant}) => `var(--button-${variant}-contrast)`};
display: flex;
flex-direction: row;
font-weight: 600;
gap: 0.5rem;
justify-content: center;
min-height: 2.5rem;
min-weight: 2.5rem;
padding: .125rem 1.25rem;

&:hover {
    background-color: ${({variant}) => `var(--button-${variant}-surface--hover)`};
    border-color: ${({variant}) => `var(--button-${variant}-outline--hover)`};
    color: ${({variant}) => `var(--button-${variant}-contrast--hover)`};
}

    &:active {
    background-color: ${({variant}) => `var(--button-${variant}-surface--active)`};
    border-color: ${({variant}) => `var(--button-${variant}-outline--active)`};
    color: ${({variant}) => `var(--button-${variant}-contrast--active)`};
}

&:disabled {
    background-color: ${({variant}) => `var(--button-${variant}-surface--disabled)`};
    border-color: ${({variant}) => `var(--button-${variant}-outline--disabled)`};
    color: ${({variant}) => `var(--button-${variant}-contrast--disabled)`};
    cursor: not-allowed;
}
        `;

export default Button;
