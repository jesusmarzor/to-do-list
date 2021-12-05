import { Nav } from "components/Nav";
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { RequireAuth } from 'components/RequireAuth';
import { AuthProvider } from 'contexts/AuthContext';
import './App.scss';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <header className="header">
          <Nav/>
        </header>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={<RequireAuth><Home/></RequireAuth>}
            />
            <Route
              path='/login'
              element={<Login/>}
            />
            <Route
              path='/register'
              element={<Register/>}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
