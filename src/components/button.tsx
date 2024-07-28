interface IButtonProps {
  text: string;
  className?: string;
  type: "submit" | "reset" | "button" | undefined;
}

const Button = ({ text, className, type }: IButtonProps) => {
  return (
    <button
      type={type}
      className={`${className} px-4 py-2 border border-black rounded active:scale-95`}
    >
      {text}
    </button>
  );
};

export default Button;
