import React, { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import MainLayout from "./styles/MainLayout";

function App() {
  const [active, setActive] = useState(1);
  return (
    <div className="h-screen bg-gradient-to-r from-orange-200 to-pink-200 bg-opacity-60">
      <MainLayout>
        <Navigation
          active={active}
          setActive={setActive}
        />
        <main className="flex-1 bg-opacity-75 bg-white border-3 border-white backdrop-blur-4.5 rounded-2xl overflow-x-hidden">
          {displayData()}
        </main>
      </MainLayout>
    </div>
  );
}

export default App;
