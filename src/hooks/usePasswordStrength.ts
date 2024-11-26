import { 
  ChangeEvent, 
  useCallback, 
  useEffect, 
  useState 
} from "react"
import { PasswordStrengthType } from "../components/modules/types";

export const usePasswordStrength = () => {
  const [inputValue, setInputValue] = useState("");
  const [strength, setStrength] = useState<PasswordStrengthType>("empty");

  useEffect(() => {
    const hasLetters = /[a-zA-Z]/.test(inputValue);
    const hasNumbers = /\d/.test(inputValue);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(inputValue);

    if (inputValue === "" || inputValue.length < 8) return setStrength("empty");

    if (hasLetters && hasNumbers && hasSymbols) return setStrength("strong");
    if (
      (hasLetters && hasNumbers) 
      || (hasLetters && hasSymbols) 
      || (hasNumbers && hasSymbols)
    ) return setStrength("medium");

    setStrength("weak");
  }, [inputValue]);

  const handleInputChange = useCallback((
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setInputValue(value.trim());
  }, []);

  return {
    handleInputChange, 
    inputValue,
    strength,
  }
}