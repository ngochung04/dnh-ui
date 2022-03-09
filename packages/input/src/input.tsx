import React from "react";
interface Props {}
export const Input = ({
  children,
  ...props
}: Props & React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props}>{children}</input>;
};
