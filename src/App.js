import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Body from "./components/body";
import Footer from "./components/footer";
import StrokeFormPage from "./components/stroke_form_page";
import ScrollToTop from "./components/scrolltotop";

function App() {
  return (
    <Router>
      <div>

        <Navbar />

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/strokeform" element={<><ScrollToTop /><StrokeFormPage /></>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
