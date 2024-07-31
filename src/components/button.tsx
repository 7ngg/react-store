interface IButtonProps {
  text: string;
  className?: string;
  type: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
}

const Button = ({ text, className, type, onClick }: IButtonProps) => {
  return (
    <button
      type={type}
      className={`${className} px-4 py-2 border border-black rounded active:scale-95`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
