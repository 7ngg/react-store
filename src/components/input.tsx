import { MutableRefObject } from "react";

interface InputProps {
  placeholder?: string;
  className?: string;
  type: React.HTMLInputTypeAttribute;
  onChange?: (e: any) => void;
}

const Input = ({ placeholder, className, type, onChange }: InputProps) => {
  return (
    <input
      onChange={onChange}
      placeholder={placeholder}
      className={`${className} px-2 py-2 outline-none border border-black rounded bg-gray-300`}
      type={type}
    />
  );
};

export default Input;
