import { Routes, Route } from "react-router-dom";
import { PasswordPage } from "./pages/PasswordPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PasswordPage />} />
    </Routes>
  );
};