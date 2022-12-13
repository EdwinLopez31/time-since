interface InputFieldLabelProps {
  id: string;
  placeholder: string;
}

const InputFieldLabel = ({ id, placeholder }: InputFieldLabelProps) => {
  return (
    <label
      htmlFor={id}
      className='absolute text-sm transition-all duration-300 left-2 -top-6 text-deepBlue-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-time-since-white peer-focus:text-sm pointer-events-none'
    >
      {placeholder}
    </label>
  );
};

export default InputFieldLabel;
