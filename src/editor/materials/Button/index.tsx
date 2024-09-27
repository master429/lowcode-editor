import { ButtonType } from "antd/es/button";
import { Button as AntdButton } from "antd";

export interface ButtonProps {
  type: ButtonType;
  text: string;
}

const Button = ({ type, text }: ButtonProps) => {
  return <AntdButton type={type}>{text}</AntdButton>;
};

export default Button;
