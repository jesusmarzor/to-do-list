import './App.scss';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { RequireAuth } from 'components/RequireAuth';
import {useAuth} from 'hooks/useAuth'
import { Nav } from "components/Nav";

function App() {
  const { isAuthenticated, login, logout} = useAuth();
  return (
    <div className="App">
      <header className="header">
        <Nav logout={logout} isAuthenticated={isAuthenticated}/>
      </header>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<RequireAuth isAuthenticated = {isAuthenticated}><Home/></RequireAuth>}
          />
          <Route
            path='/login'
            element={<Login login={login} isAuthenticated={isAuthenticated}/>}
          />
          <Route
            path='/register'
            element={<Register login={login} isAuthenticated={isAuthenticated}/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
