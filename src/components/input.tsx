interface InputProps {
  placeholder?: string;
  className?: string;
}

const Input = ({ placeholder, className }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      className={`${className} px-2 py-2 outline-none border border-black rounded bg-gray-300`}
      type="text"
    />
  );
};

export default Input;
