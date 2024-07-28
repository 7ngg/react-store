interface IButtonProps {
  text: string;
  className?: string;
}

const Button = ({ text, className }: IButtonProps) => {
  return (
    <button
      className={`${className} px-4 py-2 border border-black rounded active:scale-95`}
    >
      {text}
    </button>
  );
};

export default Button;
