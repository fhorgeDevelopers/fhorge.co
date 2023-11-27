import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/login/Signup';
import Login from './pages/login/Login';
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={ <Home />}/>
        <Route exact path='/signup' element={ <Signup />}/>
        <Route exact path='/login' element={ <Login />}/>
      </Routes>
    </>
  );
}

export default App;
