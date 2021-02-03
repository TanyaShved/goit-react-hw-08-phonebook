import { Switch} from 'react-router-dom';
import { useEffect, lazy, Suspense  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from 'components/AppBar/AppBar';
import Container from 'components/Container/Container';
import { authOperations, authSelectors } from 'redux/auth';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const HomeView = lazy(() => import('views/HomeView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));
// const UploadView = lazy(() => import('./views/UploadView'));

const App = () => { 
  const dispatch = useDispatch();
   const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
      
      <AppBar />

      <Switch>
        <Suspense fallback={<Loader
        type="Bars"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />}>         
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" redirectTo='/contacts' restricted>
            <LoginView />
          </PublicRoute>
          
          <PrivateRoute path="/contacts" redirectTo='/login'>
            <ContactsView />
          </PrivateRoute>
          </Suspense>
        </Switch> 
      
    </Container>)
    );
}

export default App;
