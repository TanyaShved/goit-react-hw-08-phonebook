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

        <Suspense fallback={
            <Spinner />
          }>  
      <Switch>
          <PublicRoute path="/register" restricted  exact>
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" redirectTo='/contacts' restricted  exact>
            <LoginView />
          </PublicRoute>
          
          <PrivateRoute path="/contacts" redirectTo='/login' exact>
            <ContactsView />
            </PrivateRoute>

            <PublicRoute redirectTo="/contacts" restricted>
                       <LoginView />
                </PublicRoute>
          </Switch> 
        </Suspense>
    </>)
    );
}

export default App;
