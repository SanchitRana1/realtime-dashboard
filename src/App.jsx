import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/appStore';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import Loading from './components/Loading';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
	return (
		<Provider store={store}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <Router>
          <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<SignIn />} />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
              </Routes>
            
          </Suspense>
        </Router>
      </GoogleOAuthProvider>
    </Provider>
	);
}

export default App;
