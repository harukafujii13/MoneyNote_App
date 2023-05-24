import React from "react";
import Navigation from "./components/Navigation/Navigation";
import MainLayout from "./styles/MainLayout";

function App() {
  return (
    <div className="h-screen bg-gradient-to-r from-orange-100 to-pink-100 bg-opacity-60">
      <MainLayout>
        <Navigation />
      </MainLayout>
    </div>
  );
}

export default App;
