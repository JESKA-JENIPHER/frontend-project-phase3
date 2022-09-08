import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="overallTop">
        <Navbar />
        <Routes>
          <Route exact="true" path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/teachers/:id" element={<SpecificTeacher />} />
          <Route path="/courses/:id" element={<SpecificCourse />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
