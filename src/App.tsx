import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { RouteConfig } from "@routes/config";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="meefood-themes" defaultTheme="system">
        <Helmet titleTemplate="Meefood: %s" />
        <BrowserRouter>
          <Toaster richColors />
          <QueryClientProvider client={queryClient}>
            <RouteConfig />
          </QueryClientProvider>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}
