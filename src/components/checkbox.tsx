interface checkboxProps {
  htmlFor?: string;
  label: string;
  description?: string;
}

const Checkbox = ({ htmlFor, description, label }: checkboxProps) => {
  return (
    <div className="flex gap-2 items-center">
      <input className="outline-none accent-stone-900" type="checkbox" id={htmlFor}/>
      <label htmlFor={htmlFor}>{label}</label>
    </div>
  );
};

export default Checkbox;
