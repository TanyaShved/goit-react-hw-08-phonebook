import { Switch } from 'react-router-dom';
import { useEffect, lazy, Suspense  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import NewAppBar from 'components/NewAppBar/NewAppBar';
import Spinner from 'components/Spinner/Spinner';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const RegisterView = lazy(() => import('views/RegisterView'  /* webpackChunkName: "register-view" */));
const LoginView = lazy(() => import('views/LoginView'  /* webpackChunkName: "login-view" */));
const ContactsView = lazy(() => import('views/ContactsView'  /* webpackChunkName: "contacts-view" */));
const NotFoundView = lazy(() =>import('views/NotFoundView' /* webpackChunkName: "not-found-view" */),);

const App = () => { 
  const dispatch = useDispatch();
   const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
      
      <NewAppBar />

      <Switch>
          <Suspense fallback={
            <Spinner />
          }>  
          <PublicRoute path="/register" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" redirectTo='/contacts' restricted>
            <LoginView />
          </PublicRoute>
          
          <PrivateRoute path="/contacts" redirectTo='/login'>
            <ContactsView />
            </PrivateRoute>

            <PrivateRoute>
            <NotFoundView />
          </PrivateRoute> 
          </Suspense>
        </Switch> 
      
    </>)
    );
}

export default App;
