import { CommonComponentProps } from "../../interface";

function Page({ children, styles }: CommonComponentProps) {
  return (
    <div className="p-[20px]" style={{ ...styles }}>
      {children}
    </div>
  );
}

export default Page;
