import './App.scss';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { RequireAuth } from 'components/RequireAuth';
import {useAuth} from 'hooks/useAuth'

function App() {
  const { isAuthenticated, login, logout} = useAuth();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<RequireAuth isAuthenticated = {isAuthenticated}><Home logout={logout}/></RequireAuth>}
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
