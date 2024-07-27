interface InputProps {}

const Input = (props: InputProps) => {
  return (
    <input
      className="px-2 py-2 outline-none border border-black rounded bg-gray-300"
      type="text"
    />
  );
};

export default Input;
