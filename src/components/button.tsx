interface IButtonProps {
  text: string;
  className?: string;
}

const Button = ({ text, className }: IButtonProps) => {
  return (
    <button
      className={`${className} px-4 py-2 border border-black rounded hover:bg-black hover:text-white`}
    >
      {text}
    </button>
  );
};

export default Button;
