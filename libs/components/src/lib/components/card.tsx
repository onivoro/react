import { TProps } from '@onivoro/react-common';
import { CSSProperties, FC } from 'react';

export const defaultStyles: CSSProperties = {
    backgroundColor: `var(--oni-background-color)`,
    borderRadius: '4px',
    color: `var(--oni-color)`,
};

export const Card: FC<TProps<{ things?: string }>> = ({ children, className, style }) => {

    return <div className={className} style={{ ...defaultStyles, padding: '1rem', border: `solid 1px var(--oni-color)`, ...style }}>
        {children}
    </div>;
}
