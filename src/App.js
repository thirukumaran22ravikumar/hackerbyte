import './App.css';
import Loader from './common/Loader/index';

import { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import ECommerce from './pages/SuperAdmin/ECommerce';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';

import routes from './routes';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));
const DefaultStudentLayout = lazy(() => import('./layout/DefaultStudentLayout'));
const DefaultAdminLayout = lazy(()=> import('./layout/DefaultAdminLayout'));

function App() {
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(localStorage.getItem('role'));
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [name, setName] = useState(localStorage.getItem('name'));


  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);


  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    const storedEmail = localStorage.getItem('email');
    const storedName = localStorage.getItem('name');
    setRole(storedRole);
    setEmail(storedEmail);
    setEmail(storedName);
  }, []);

  const handleLogin = (role, email, name) => {
    setRole(role);
    setEmail(email);
    setName(name);
    localStorage.setItem('role', role);
    localStorage.setItem('email', email);
    localStorage.setItem('name', name)
  };

  const handleRegister = () => {
    // alert('Registration successful! Please login.');
    window.location.href = '/';
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/SignIn" element={<SignIn onLogin={handleLogin} />} />
          <Route path="/SignUp" element={<SignUp />} /> */}
          
          {!role && (
            <>
              
              <Route path="/SignIn" element={<SignIn onLogin={handleLogin} />} />
              <Route path="/SignUp" element={<SignUp onRegister={handleRegister} />} />
              <Route path="*" element={<Navigate to="/SignIn" />} />
            </>
          )}

          {/* Admin Routes */}
          {role === 'admin' && (
            <>
             
              <Route element={<DefaultAdminLayout />}>
              <Route index element={<ECommerce />} />
                {routes.map((route, index) => {
                  const { path, component: Component } = route;
                  return (
                    <Route
                      key={index}
                      path={path}
                      element={
                        <Suspense fallback={<Loader />}>
                          <Component />
                        </Suspense>
                      }
                    />
                  );
                })}
              </Route>
            </>
          )}
          { role === 'student' && (

            <Route element={<DefaultStudentLayout />}>
            <Route index element={<ECommerce />} />
              {routes.map((route, index) => {
                const { path, component: Component } = route;
                return (
                  <Route
                    key={index}
                    path={path}
                    element={
                      <Suspense fallback={<Loader />}>
                        <Component />
                      </Suspense>
                    }
                  />
                );
              })}
            </Route>
          )}

          {/* SuperAdmin Routes */}
          {role === 'superadmin' && (
            <>
              <Route element={<DefaultLayout />}>
              <Route index element={<ECommerce />} />
              {routes.map((route, index) => {
                const { path, component: Component } = route;
                return (
                  <Route
                    key={index}
                    path={path}
                    element={
                      <Suspense fallback={<Loader />}>
                        <Component />
                      </Suspense>
                    }
                  />
                );
              })}
            </Route>
            </>
          )}

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
