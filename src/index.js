import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FilterContextProvider } from "./Context/FilterContext";
import { FormContextProvider } from "./Context/FormContext";
import { PostFormContextProvider } from "./Context/PostFormContext";
import { UserContextProvider } from "./Context/UserContext";
import { UserTaskContextProvider } from "./Context/UserTaskContext";
import "react-toastify/dist/ReactToastify.css";
import { ProductItemContextProvider } from "./Context/ProductItemContext";
import { PersonItemContextProvider } from "./Context/PersonItemContext";
import { LiveLocationShowPersonContextProvider } from "./Context/LiveLocationShowPersonContext";
import { FilterLiveLocationContextProvider } from "./Context/FilterLiveLocationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FilterContextProvider>
  <FilterLiveLocationContextProvider>
  
  <LiveLocationShowPersonContextProvider>
  <PersonItemContextProvider>
    <ProductItemContextProvider>
      <FormContextProvider>
        <PostFormContextProvider>
          <UserContextProvider>
            <UserTaskContextProvider>
                <App />
            </UserTaskContextProvider>
          </UserContextProvider>
        </PostFormContextProvider>
      </FormContextProvider>
    </ProductItemContextProvider>
    </PersonItemContextProvider>
    </LiveLocationShowPersonContextProvider>
    </FilterLiveLocationContextProvider>
  </FilterContextProvider>
);
