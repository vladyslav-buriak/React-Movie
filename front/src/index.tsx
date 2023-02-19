import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { AppContextProvider } from "./providers/AppContext";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);

reportWebVitals();
