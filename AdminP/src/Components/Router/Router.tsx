import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import NewsPage from '../News';

// Seperate router construction for optional navigation via links
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/news" element={<NewsPage />} />
    </Routes>
  );
};
export default Router;
