import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/login/SignIn';
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={ <Home />}/>
        <Route exact path='/login' element={ <SignIn />}/>
      </Routes>
    </>
  );
}

export default App;
