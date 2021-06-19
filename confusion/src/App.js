import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/layout/Navigation.js";
import Waitlist from "./components/waitlist/Waitlist";
import Login from "./components/waitlist/Login";
import Signup from "./components/waitlist/Signup";
import Nopage from "./components/Nopage";
import AddGuestComponent from "./components/waitlist/AddGuestComponent";
import ReviewsComponent from "./components/waitlist/ReviewsComponent";
import { Component } from "react";

class App extends Component {
  render() {
    const WaitlistWithNavigation = withNavigation(Waitlist);
    return (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<WaitlistWithNavigation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addguest" element={<AddGuestComponent />} />
          <Route path="/reviews" element={<ReviewsComponent />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

function withNavigation(Component) {
  return (props) => <Component {...props} navigate={useNavigate()} />;
}

export default App;
