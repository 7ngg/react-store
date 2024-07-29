interface checkboxProps {
  htmlFor: string;
  description: string;
}

const Checkbox = ({ htmlFor, description }: checkboxProps) => {
  return (
    <div>
      <input type="checkbox" />
      <div>
        <label htmlFor={htmlFor}></label>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Checkbox;
