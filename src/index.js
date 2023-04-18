import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FilterContextProvider } from "./Context/FilterContext";
import { FormContextProvider } from "./Context/FormContext";
import { PostFormContextProvider } from "./Context/PostFormContext";
import { UserContextProvider } from "./Context/UserContext";
import { UserTaskContextProvider } from "./Context/UserTaskContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FilterContextProvider>
    <FormContextProvider>
      <PostFormContextProvider>
        <UserContextProvider>
          <UserTaskContextProvider>
            <App />
          </UserTaskContextProvider>
        </UserContextProvider>
      </PostFormContextProvider>
    </FormContextProvider>
  </FilterContextProvider>
);
