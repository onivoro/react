import { CSSProperties, FC, PropsWithChildren } from 'react';
import { baselineStyles } from '../constants/baseline-styles.constant';

export const Card: FC<PropsWithChildren<{ className?: string, style?: CSSProperties }>> = ({ children, className, style }) => {

    return <div className={className} style={{ ...baselineStyles, padding: '1rem', border: `solid 1px var(--oni-color-muted)`, ...style }}>
        {children}
    </div>;
}
