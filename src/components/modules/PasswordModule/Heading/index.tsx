import { memo } from "react";

export const Heading = memo(() => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl text-left font-semibold text-blue-500">
        Hey there!
      </h1>          
      <span className="text-base text-gray-600">
        Lets check your password strength
      </span>
    </div>    
  );
});