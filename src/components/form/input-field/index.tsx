import InputFieldLabel from "./InputFieldLabel";
import InputFieldWrapper from "./InputFieldWrapper";

interface InputFieldProps {
  type?: "text" | "datetime-local";
  placeholder: string;
  name: string;
  id: string;
  isTextArea?: boolean;
  required?: boolean;
  max?: string;
}

const InputField = ({
  id,
  name,
  max,
  placeholder,
  required,
  isTextArea,
  type = "text",
}: InputFieldProps) => {
  if (isTextArea) {
    return (
      <InputFieldWrapper>
        <textarea
          required={required}
          placeholder={placeholder}
          name={name}
          id={id}
          className={`p-2 peer h-40 focus:border-l-[0.5rem] outline-none transition-[border] duration-100 border-2 w-full border-deepBlue-400 text-time-since-white placeholder-transparent focus:outline-none bg-transparent resize-none z-10`}
        />
        <InputFieldLabel id={id} placeholder={placeholder} />
      </InputFieldWrapper>
    );
  }
  return (
    <InputFieldWrapper>
      <input
        max={type === "datetime-local" ? max : ""}
        required={required}
        placeholder={placeholder}
        name={name}
        id={id}
        type={type}
        className={`p-2 peer h-10 focus:border-l-[0.5rem] outline-none transition-[border] duration-100 border-2 w-full border-deepBlue-400 text-time-since-white placeholder-transparent focus:outline-none bg-transparent z-10`}
      />
      <InputFieldLabel id={id} placeholder={placeholder} />
    </InputFieldWrapper>
  );
};

export default InputField;
