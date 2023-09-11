import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import MainLayout from './styles/MainLayout';
import { useGlobalContext } from './context/globalContext';
import ExpensePage from './pages/ExpensePage/ExpensePage';
import HomePage from './pages/HomePage/HomePage';
import IncomePage from './pages/IncomePage/IncomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function ProtectedLayout() {
  return (
    <MainLayout>
      <Navigation />
      <main className="flex-1 bg-opacity-75 bg-white border-3 border-white backdrop-blur-4.5 rounded-2xl overflow-auto">
        <Outlet />
      </main>
    </MainLayout>
  );
}

function App() {
  const global = useGlobalContext();

  return (
    <div className="h-screen bg-primary-columbiaBlue text-primary-gunmetal font-nunito">
      <BrowserRouter>
        <ToastContainer />
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
            path="/"
            element={<ProtectedLayout />}>
            {/* <Route
              index
              element={<HomePage />}
            /> */}

            <Route
              path=""
              element={<PrivateRoute />}>
              <Route
                path="profile"
                element={<ProfilePage />}
              />
              <Route
                path="home"
                element={<HomePage />}
              />
              <Route
                path="income"
                element={<IncomePage />}
              />
              <Route
                path="expense"
                element={<ExpensePage />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//index for the HomePage route, meaning it would be the default page when navigating to the root ("/").

//HomePage, IncomePage, and ExpensePage are nested routes under the ProtectedLayout,
//which includes both MainLayout and Navigation.
