import { CSSProperties, FC, PropsWithChildren } from 'react';
import { baselineStyles } from '../constants/baseline-styles.constant';

export const Body: FC<PropsWithChildren<{ className?: string, style?: CSSProperties }>> = ({ children, style, className }) => {

    return <div className={className} style={{ ...baselineStyles, width: '100%', minHeight: '100vh', ...style }}>
        {children}
    </div>;
}
