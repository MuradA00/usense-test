import { useCallback } from "react";
import { PasswordStrengthLevels, PasswordStrengthType } from "../../types";
import { passwordBarColors, passwordStrengthLevels } from "../../constants";

import clsx from "clsx";

interface StrengthIndicatorProps {
  strength: PasswordStrengthType;
}

export const StrengthIndicator = ({strength}: StrengthIndicatorProps) => {
  const bars = Array.from({ length: 3 });

  const handleBackground = useCallback((barIndex: number) => {
      const currentBarColor = passwordBarColors[strength];
      const currentIndex = 
        barIndex <= passwordStrengthLevels[strength as keyof PasswordStrengthLevels];

      return currentIndex ? currentBarColor : "bg-gray-200";
  }, [strength]);

  return (
    <ul className="grid grid-cols-3 gap-2">
      {bars.map((_, i) => (
        <li
          className={clsx(
            "min-h-2 rounded-md transition-colors duration-200",
            handleBackground(i), 
          )}
          key={i} 
        />
      ))}
    </ul>  
  );
};