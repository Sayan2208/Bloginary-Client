import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import viteLogo from '/vite.svg';
import './index.css';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Services from './pages/Services';
import Support from './pages/Support';
import Landing from './pages/Landing';
import Blogstory from './pages/Blogstory';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Landing />} />
          <Route path="Home" element={<Home />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="Services" element={<Services />} />
          <Route path="Support" element={<Support />} />
          <Route path="Blogstory" element={<Blogstory/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
