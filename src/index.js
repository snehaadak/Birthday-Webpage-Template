import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";   // ✅ no curly braces here
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);