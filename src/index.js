import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContentProvider from "./Components/Content";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContentProvider>
    <App />
  </ContentProvider>
);
