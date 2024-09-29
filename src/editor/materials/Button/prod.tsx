import { Button as AntdButton } from "antd";
import { CommonComponentProps } from "../../interface";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Button = ({ id, type, text, styles, ...props }: CommonComponentProps) => {
  return (
    <AntdButton type={type} style={styles} {...props}>
      {text}
    </AntdButton>
  );
};

export default Button;
