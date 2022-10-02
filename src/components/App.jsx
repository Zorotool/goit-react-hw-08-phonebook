import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';
import Layout from './Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
     <Routes>
      {!isFetchingCurrentUser &&
        <Route path="/" element={<Layout />}>
        <Route index element={<PublicRoute><HomePage /></PublicRoute>} />
        <Route path="register" element={<PublicRoute restricted><RegisterPage /></PublicRoute>} />
        <Route path="login" element={<PublicRoute redirectTo="/contacts" restricted><LoginPage /></PublicRoute>} />
        <Route path="contacts" element={<PrivateRoute redirectTo="/login"><ContactsPage /></PrivateRoute>} />
        <Route path="*" element={<NotFoundPage />} />
        </Route>
      }
    </Routes>
  );
}