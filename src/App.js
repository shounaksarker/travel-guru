import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import Destination from "./Components/Destination/Destination";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import { createContext, useState } from "react";
import Booking from "./Components/Booking/Booking";
import Details from "./Components/Details/Details";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";



export const DataContext = createContext();
function App() {
  const [showPlace, setShowPlace] = useState({
      id: 1,
      title: "Cox's Bazar",
      description: "Why Cox's Bazar is a Great Tourist Attraction Cox's Bazar Review. Cox's Bazar is famous for its long natural sandy sea beach. ... Cox's Bazar has the world's largest unbroken sea beach which stretches more than 120 km. The entire beach is a stretch of golden sandy sea beach which is reachable by motorbike.",
      img: "https://i.ibb.co/TrMkhf4/Rectangle-1.png"   
  });

  const [oldUser, setOldUser] = useState(true);
  
  const [user, setUser] = useState({
    isSignIn: false,
    success: false,
    fName: '',
    lName: '',
    email: '',
    password: '',
    photo: '',
    error: '',
});


  
  return (
    <DataContext.Provider value={[showPlace, setShowPlace, user, setUser, oldUser, setOldUser]} >
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/destination">
            <Destination></Destination>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/spot/:name">
            <Details></Details>
          </PrivateRoute>
        </Switch>
      </Router>
    </DataContext.Provider>
  );
}

export default App;
