import { ComponentProps, FC, PropsWithChildren } from 'react';
import { css, styled } from 'styled-components';



export type TThemeProps = {
    base: string,
    contrast: string,
    primary: string,
    success: string,
    info: string,
    warn: string,
    danger: string,
 };

type TStyledThemeProps = {
    $base: string,
    $contrast: string,
    $primary: string,
    $success: string,
    $info: string,
    $warn: string,
    $danger: string,
}

export const StyledTheme: FC<TThemeProps> = styled.div`
    --oni-base: ${props => props.base};
    --oni-contrast: ${props => props.contrast};
    --oni-primary: ${props => props.primary};
    --oni-success: ${props => props.success};
    --oni-info: ${props => props.info};
    --oni-warn: ${props => props.warn};
    --oni-danger: ${props => props.danger};

    --oni-background-color: var(--oni-contrast);
    --oni-color: var(--oni-base);

    @media (prefers-color-scheme: dark) {
        --oni-background-color: ${props => props.contrast};
        --oni-color: ${props => props.base};
    }
`;

export const Theme: FC<PropsWithChildren<TStyledThemeProps>> = ({children, ...props}) => <Theme {...props}>{children}</Theme>