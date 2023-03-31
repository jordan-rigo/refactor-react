import React, { RefAttributes } from "react";

type InputProps = React.HTMLProps<HTMLInputElement> &
  RefAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});
export default Input;
