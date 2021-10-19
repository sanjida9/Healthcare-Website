import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Register from "./components/Register/Register";
import AuthProvider from "./contexts/AuthProvider";
import Service from "./components/Service/Service";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Doctors from "./components/Doctors/Doctors";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <NavigationBar></NavigationBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/doctor">
              <Doctors></Doctors>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/services">
              <Service></Service>
            </Route>
            <PrivateRoute path="/bookService/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
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
