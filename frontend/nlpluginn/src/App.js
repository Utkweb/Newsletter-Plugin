import Welcome from './components/Welcome';
import Subscribe from './components/Subscribe';
import Plugin from './components/Plugin';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import UserManager from './components/UserManager';
import UpdateUser from './components/UpdateUser';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from './components/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>

      <Routes>
        <Route element={<Welcome/>} path='welcome'/>
        <Route element={<Plugin/>} path='plugin'/>
        <Route element={<Subscribe/>} path='subscribe'/>
        <Route element={<UserManager/>} path='usermanager'/>
        <Route element={<UpdateUser/>} path='updateUser'/>
        <Route element={<Signup/>} path='signup'/>
        <Route element={<Login/>} path='login'/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
