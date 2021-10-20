
import './App.css';

import { BrowserRouter ,Switch ,Route} from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Service from './Component/Service-details/Service';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import NotFound from './Component/NotFound/NotFound';
import Footer from './Component/Footer/Footer';
import Contact from './Component/Contact/Contact';
import ServiceDetail from './Component/Service-details/ServiceDetail';
import AuthProvider from './Context/AuthProvider';
import PrivateRouter from './Component/PrivateRouter.js/PrivateRouter';

function App() {
  return (
    <div className=" ">
      <AuthProvider>
      <BrowserRouter>
          <Header></Header>
        <Switch>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route path="/home">
             <Home></Home>
          </Route>
          <Route path="/about">
             <About></About>
          </Route>
          <Route path="/service">
             <Service></Service>
          </Route>
          <PrivateRouter path="/contact">
            <Contact></Contact>
          </PrivateRouter>
          
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRouter path="/servicDetails/:serviceId">
               <ServiceDetail></ServiceDetail>
          </PrivateRouter>
          
          <Route path="*">
             <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
