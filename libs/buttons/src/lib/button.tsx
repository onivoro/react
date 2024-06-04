import { ComponentProps } from "react";

import '../index.css';

export type ButtonsProps = ComponentProps<"button"> & { children: any };

export function Button({ children, ...props }: ButtonsProps) {
  return (
    <button className="border border-solid border-blue-300 bg-blue-300" {...props}>{children}</button>
  );
}

export default Button;

