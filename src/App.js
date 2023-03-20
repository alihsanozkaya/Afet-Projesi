import MainPage from "./Pages/MainPage";
import AboutPage from "./Pages/AboutPage";
import ErrorPage from "./Pages/ErrorPage";
import NeedPage from "./Pages/NeedPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import ChangePasswordPage from "./Pages/ChangePasswordPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./Context/Context";
import { MapContextProvider } from "./Context/MapContext";

function App() {
  return (
    <ContextProvider>
      <MapContextProvider>
        <Router>
          <Routes>
            <Route index path="/" element={<MainPage />} />
            <Route path="/hakkimizda" element={<AboutPage />} />
            <Route path="/ihtiyaclar" element={<NeedPage />} />
            <Route path="/sifresifirlama" element={<ResetPasswordPage />} />
            <Route path="sifredegistirme" element={<ChangePasswordPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </MapContextProvider>
    </ContextProvider>
  );
}

export default App;
