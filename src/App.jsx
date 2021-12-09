import { Header } from "components/Header";
import { Home } from 'pages/Home';
import { Profile } from "pages/Profile";
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { Error404 } from "pages/Error404";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RequireAuth } from 'components/RequireAuth';
import { RequireNoAuth } from "components/RequireNoAuth";
import { AuthProvider } from 'contexts/AuthContext';
import './App.scss';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route
              path='/'
              element={<RequireAuth><Home/></RequireAuth>}
            />
             <Route
              path='/profile'
              element={<RequireAuth><Profile/></RequireAuth>}
            />
            <Route
              path='/login'
              element={<RequireNoAuth><Login/></RequireNoAuth>}
            />
            <Route
              path='/register'
              element={<RequireNoAuth><Register/></RequireNoAuth>}
            />
            <Route
              path='*'
              element={<Error404/>}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
