import './App.css';
import LoginForm from './components/LoginForm';
import Page from './components/Page';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/" element={<Page />} />
    </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
