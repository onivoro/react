import { CSSProperties } from "react";

export type TTheme = {
    'bg-color': string,
    'color': string,
};

export const buildTheme = (theme: TTheme) => {screen
    return {} as CSSProperties;
};

export const defaultStyles: CSSProperties = {
    backgroundColor: `var(--oni-bg-color, white)`,
    color: `var(--oni-color, navyblue)`,
};
