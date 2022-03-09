import React, { FC } from "react";
interface Props {
  children: React.ReactNode;
  variant?: "primary" | "danger";
}
export const Badge = ({
  children,
  variant,
  ...props
}: Props & React.HTMLAttributes<HTMLSpanElement>) => {
  const primary = {
    backgroundColor: "black",
    color: "blue",
    border: "1px solid blue",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1.2em",
    fontWeight: "bold",
    outline: "none",
    transition: "all 0.2s ease-in-out",
  };
  const danger = {
    backgroundColor: "black",
    color: "red",
    border: "1px solid red",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1.2em",
    fontWeight: "bold",
    outline: "none",
    transition: "all 0.2s ease-in-out",
  };

  const white = {
    backgroundColor: "black",
    color: "white",
    border: "1px solid white",
    padding: "2px 10px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "0.5em",
    fontWeight: "nomarl",
    outline: "none",
    transition: "all 0.2s ease-in-out",
  };

  const style = (variant: string) => {
    switch (variant) {
      case "primary":
        return primary;
      case "danger":
        return danger;
      default:
        return white;
    }
  };
  return (
    <span style={style(variant ?? "")} {...props}>
      {children}
    </span>
  );
};
