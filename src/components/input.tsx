import { MutableRefObject } from "react";

interface InputProps {
  placeholder?: string;
  className?: string;
  value?: string;
  type: React.HTMLInputTypeAttribute;
  onChange?: (e: any) => void;
}

const Input = ({ placeholder, className, type, onChange, value }: InputProps) => {
  return (
    <input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className={`${className} px-2 py-2 outline-none border border-black rounded bg-gray-300`}
      type={type}
    />
  );
};

export default Input;
