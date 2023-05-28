import React, { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import MainLayout from "./styles/MainLayout";
import Dashboard from "./components/Dashboard/Dashboard";
import Incomes from "./components/Incomes/Incomes";
import Expenses from "./components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Incomes />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <div className="h-screen bg-gradient-to-r from-orange-200 to-pink-200 bg-opacity-60">
      <MainLayout>
        <Navigation
          active={active}
          setActive={setActive}
        />
        <main className="flex-1 bg-opacity-75 bg-white border-3 border-white backdrop-blur-4.5 rounded-2xl overflow-x-hidden scrollbar-width-none">
          {displayData()}
        </main>
      </MainLayout>
    </div>
  );
}

export default App;
