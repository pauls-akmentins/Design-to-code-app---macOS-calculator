import { Routes, Route } from "react-router-dom";
import Apps from "../components/Apps";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Hi</h1>} />
      <Route path="/apps" element={<Apps />} />
    </Routes>
  );
};

export default Router;
