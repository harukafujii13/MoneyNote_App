import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import MainLayout from './styles/MainLayout';
import { useGlobalContext } from './context/globalContext';
import ExpensePage from './pages/ExpensePage/ExpensePage';
import HomePage from './pages/HomePage/HomePage';
import IncomePage from './pages/IncomePage/IncomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';

function App() {
  const global = useGlobalContext();
  console.log(global);

  return (
    <div className="h-screen bg-primary-columbiaBlue text-primary-gunmetal font-nunito">
      <BrowserRouter>
        <MainLayout>
          <Navigation />
          <main className="flex-1 bg-opacity-75 bg-white border-3 border-white backdrop-blur-4.5 rounded-2xl overflow-x-hidden scrollbar-width-none">
            <Routes>
              <Route
                path="/register"
                element={<SignupPage />}
              />
              <Route
                path="/login"
                element={<LoginPage />}
              />
              <Route
                path="/home"
                element={<HomePage />}
              />
              <Route
                path="/income"
                element={<IncomePage />}
              />
              <Route
                path="/expense"
                element={<ExpensePage />}
              />
            </Routes>
          </main>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
