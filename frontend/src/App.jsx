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
    <div className="h-screen bg-primary-columbiaBlue text-primary-gunmetal">
      <BrowserRouter>
        <MainLayout>
          <Navigation />
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
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
