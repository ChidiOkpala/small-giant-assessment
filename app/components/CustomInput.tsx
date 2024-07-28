import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type CustomInputProps = {
  onChange: (value: string) => void;
  label?: string;
} & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "onChange">

const CustomInput = ({ label, onChange, ...otherProps }: CustomInputProps) => {
  return (
    <div className="w-full">
      {label && <label className="text-base font-bold text-[#333333] block mb-3">{label}</label>}
      <input
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-11 border border-gray-500 outline-none rounded-lg px-4"
        {...otherProps}
      />
    </div>
  );
};

export default CustomInput;
