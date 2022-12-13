const InputFieldWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative sm:w-96 md:w-[32rem] min-w-[12rem] flex-grow'>
      {children}
    </div>
  );
};

export default InputFieldWrapper;
