import { Button as AntdButton } from "antd";
import { CommonComponentProps } from "../../interface";

const Button = ({ type, text, styles }: CommonComponentProps) => {
  return (
    <AntdButton type={type} style={styles}>
      {text}
    </AntdButton>
  );
};

export default Button;
