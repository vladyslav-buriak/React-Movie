import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { AppContextProvider } from "./providers/AppContext";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);

reportWebVitals();
