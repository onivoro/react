import { FC, PropsWithChildren } from 'react';
import { styled } from 'styled-components';

export type TThemeProps = {
    base: string,
    contrast: string,
    primary: string,
    success: string,
    info: string,
    warn: string,
    danger: string,
    font: string,
};

type TStyledThemeProps = {
    $base: string,
    $contrast: string,
    $primary: string,
    $success: string,
    $info: string,
    $warn: string,
    $danger: string,
    $font: string,
}

export const StyledTheme: FC<PropsWithChildren<TStyledThemeProps>> = styled.div`
    --oni-base: ${props => props.$base};
    --oni-contrast: ${props => props.$contrast};
    --oni-primary: ${props => props.$primary};
    --oni-success: ${props => props.$success};
    --oni-info: ${props => props.$info};
    --oni-warn: ${props => props.$warn};
    --oni-danger: ${props => props.$danger};

    font-family: ${props => props.$font};

    --oni-background-color: ${props => props.$contrast};
    --oni-color: ${props => props.$base};
    --oni-color-muted: ${props => `${props.$base}99`};

    @media (prefers-color-scheme: dark) {
        --oni-background-color: ${props => props.$base};
        --oni-color: ${props => props.$contrast};
        --oni-color-muted: ${props => `${props.$contrast}99`};
    }
`;

export const Theme: FC<PropsWithChildren<TThemeProps>> = ({ children, ...props }) => <StyledTheme
    $base={props.base}
    $contrast={props.contrast}
    $primary={props.primary}
    $success={props.success}
    $info={props.info}
    $warn={props.warn}
    $danger={props.danger}
    $font={props.font}
>{children}</StyledTheme>