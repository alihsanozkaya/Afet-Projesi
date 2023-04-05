import MainPage from "./Pages/MainPage";
import AboutPage from "./Pages/AboutPage";
import ErrorPage from "./Pages/ErrorPage";
import NeedPage from "./Pages/NeedPage";
import RequestForHelpPage from "./Pages/RequestForHelpPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import ChangePasswordPage from "./Pages/ChangePasswordPage";
import HelpFormPage from "./Pages/HelpFormPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./Context/Context";
import { MapContextProvider } from "./Context/MapContext";
import { FilterContextProvider } from "./Context/FilterContext";
import { FormContextProvider } from "./Context/FormContext";
import { PostFormContextProvider } from "./Context/PostFormContext";
import { UserContextProvider } from "./Context/UserContext";
import { UserTaskContextProvider } from "./Context/UserTaskContext";

function App() {

  return (
    <ContextProvider>
      <MapContextProvider>
        <FilterContextProvider>
          <FormContextProvider>
            <PostFormContextProvider>
              <UserContextProvider>
                <UserTaskContextProvider>
                  <Router>
                    <Routes>
                      <Route index path="/" element={<MainPage />} />
                      <Route path="/hakkimizda" element={<AboutPage />} />
                      <Route path="/ihtiyaclar" element={<NeedPage />} />
                      <Route
                        path="/yardimtalebi"
                        element={<RequestForHelpPage />}
                      />
                      <Route
                        path="/yardimtalebi/:categoryID"
                        element={<HelpFormPage />}
                      />
                      <Route
                        path="/sifresifirlama"
                        element={<ResetPasswordPage />}
                      />
                      <Route
                        path="sifredegistirme"
                        element={<ChangePasswordPage />}
                      />
                      <Route path="*" element={<ErrorPage />} />
                    </Routes>
                  </Router>
                </UserTaskContextProvider>
              </UserContextProvider>
            </PostFormContextProvider>
          </FormContextProvider>
        </FilterContextProvider>
      </MapContextProvider>
    </ContextProvider>
  );
}

export default App;
