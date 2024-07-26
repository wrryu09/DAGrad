type TextInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({ onChange }: TextInputProps) => {
  return (
    <input
      className="h-[6.5rem] w-9/12 bg-[rgba(255,255,255,0.1)] backdrop-blur-lg border border-lightGrey rounded-full text-4xl p-4 placeholder:text-[rgb(135,135,135)] text-center text-white"
      placeholder="입력!"
      maxLength={12}
      onChange={onChange}
    />
  );
};

export default TextInput;
