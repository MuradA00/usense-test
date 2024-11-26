import { InputHTMLAttributes, useState } from "react";
import { CgEye } from "react-icons/cg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasEyeToggle: boolean;
}

export const Input = ({
  hasEyeToggle,
  ...props
}: InputProps) => {
  const {type} = props;
  const [isPasswordType, setPasswordType] = useState(!!type);

  return (
    <div className="flex relative flex-col gap-1">
      <input 
        {...props}
        type={isPasswordType ? "password" : "text"} 
        className="w-full min-h-12 border-[2px] border-solid border-gray-400-400/40 transition-colors duration-300 rounded-lg focus-visible:border-blue-400 outline-none bg-transparent px-4 pr-10 font-medium" 
      />     
      {hasEyeToggle && (
        <button
          onClick={() => setPasswordType(prev => !prev)} 
          className="absolute top-1/2 -translate-y-1/2 right-4 w-6 h-6 rounded-full duration-300 transition-colors hover:bg-gray-200/70 flex justify-center items-center"
        >
          <CgEye
            className="transition-all duration-300" 
            color={isPasswordType ? "#7d7e7e" : "#3b82f6"} 
          />          
        </button>        
      )} 
    </div>
  );
};