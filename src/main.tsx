// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "@/components/theme-provider";

import "@/index.css";
// import App from "@/App.tsx";
import AboutPage from "@/pages/AboutPage.tsx";
import HomePage from "./pages/HomePage";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </ThemeProvider>
    </BrowserRouter>
);
