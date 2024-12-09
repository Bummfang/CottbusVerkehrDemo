import { Routes, Route } from 'react-router-dom';
import Home from '../Home';

// Seperate router construction for optional navigation via links
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home  />} />
    </Routes>
  );
};
export default Router;
