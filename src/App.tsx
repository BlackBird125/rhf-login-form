import React from "react";
import { LoginPage } from "./components/LoginPage";
import { SearchForm } from "./components/SearchForm";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <CssBaseline />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
          フォームサンプル
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="w-full">
            <LoginPage />
          </div>
          <div className="w-full">
            <SearchForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
