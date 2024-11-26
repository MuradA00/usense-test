import { Input } from "../../Input";
import { motion } from "framer-motion";
import { StrengthIndicator } from "./StrengthIndicator";
import { passwordBoxMotionProps } from "../constants";
import { Heading } from "./Heading";
import { usePasswordStrength } from "../../../hooks/usePasswordStrength";

export const PasswordModule = () => {
  const {
    handleInputChange,
    inputValue,
    strength,
  } = usePasswordStrength();

  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-[#E3F2FD] p-4">
      <motion.div 
        {...passwordBoxMotionProps}
        className="bg-white gap-6 w-full max-w-[500px] rounded-xl px-6 py-8 flex flex-col justify-between shadow-xl"
      >
        <Heading />
        <div className="flex flex-col gap-5">
          <Input
            hasEyeToggle 
            placeholder="Password" 
            type="password" 
            value={inputValue}
            onChange={(e) => handleInputChange(e)}
          />        
        </div>
        <StrengthIndicator strength={strength} />
      </motion.div>
    </div>
  );
};