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
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const InputField = (props: InputFieldProps) => {
  //destructure given props, then spread the others to easily assign other props on component
  const {
    id,
    placeholder,
    max,
    isTextArea,
    value,
    type = "text",
    ...rest
  } = props;
  if (isTextArea) {
    return (
      <InputFieldWrapper>
        <textarea
          {...rest}
          placeholder={placeholder}
          id={id}
          value={value}
          className={`p-2 peer h-40 focus:border-l-[0.5rem] outline-none transition-[border] bg-white/5 duration-100 border-2  w-full ${
            value !== "" && "invalid:border-red-500"
          }  text-time-since-white placeholder-transparent focus:outline-none bg-transparent resize-none z-10`}
        />
        <InputFieldLabel id={id} placeholder={placeholder} />
      </InputFieldWrapper>
    );
  }
  return (
    <InputFieldWrapper>
      <input
        {...rest}
        max={type === "datetime-local" ? max : ""}
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        className={`p-2 peer h-10 focus:border-l-[0.5rem] outline-none transition-[border] bg-white/5 duration-100 border-2 w-full ${
          value !== "" && "invalid:border-red-500"
        }  text-time-since-white placeholder-transparent focus:outline-none bg-transparent z-10`}
      />
      <InputFieldLabel id={id} placeholder={placeholder} />
    </InputFieldWrapper>
  );
};

export default InputField;
