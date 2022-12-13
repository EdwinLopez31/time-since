interface InputFieldProps {
  type?: "text" | "number" | "email" | "date" | "datetime-local";
  placeholder: string;
  name: string;
  id: string;
  isTextArea?: boolean;
  required?: boolean;
}

const InputField = (props: InputFieldProps) => {
  const { type = "text" } = props;

  if (props.isTextArea) {
    return (
      <textarea
        required={props.required}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
      />
    );
  }

  return (
    <input
      required={props.required}
      type={type}
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
    />
  );
};

export default InputField;
