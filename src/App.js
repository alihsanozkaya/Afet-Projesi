import MainPage from "./Pages/MainPage";
import AboutPage from "./Pages/AboutPage";
import ErrorPage from "./Pages/ErrorPage";
import NeedPage from "./Pages/NeedPage";
import RequestForHelpPage from "./Pages/RequestForHelpPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import ChangePasswordPage from "./Pages/ChangePasswordPage";
import HelpFormPage from "./Pages/HelpFormPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<MainPage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/ihtiyaclar" element={<NeedPage />} />
          <Route path="/yardimtalebi" element={<RequestForHelpPage />} />
          <Route path="/yardimtalebi/:categoryID" element={<HelpFormPage />} />
          <Route path="/sifresifirlama" element={<ResetPasswordPage />} />
          <Route path="/sifredegistirme" element={<ChangePasswordPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
