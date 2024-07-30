interface InputProps {
  placeholder?: string;
  className?: string;
  type: React.HTMLInputTypeAttribute;
}

const Input = ({ placeholder, className, type }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      className={`${className} px-2 py-2 outline-none border border-black rounded bg-gray-300`}
      type={type}
    />
  );
};

export default Input;
