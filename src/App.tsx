import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { RouteConfig } from "@routes/config";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Toaster } from "sonner";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s - Meefood" />
      <BrowserRouter>
        <Toaster richColors />
        <div>
          <RouteConfig />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
