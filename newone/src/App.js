import  Home  from "../src/pages/home";
import Contact from "../src/pages/contact"
import Layout from "./pages/layout";
import Blog from "./pages/blogs";
import NoPage from "./assests/noPage";
import About from "./pages/about";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
