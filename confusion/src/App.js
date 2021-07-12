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
import { isUserLoggedIn } from "./components/authentication/AuthenticationService";
import LeaveReviewComponent from "./components/waitlist/LeaveReviewComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: isUserLoggedIn(),
    };
    this.updateAuth = this.updateAuth.bind(this);
  }

  updateAuth() {
    this.setState({
      loggedIn: isUserLoggedIn(),
    });
  }

  render() {
    const WaitlistWithNavigation = withNavigation(Waitlist);
    const LoginWithNavigation = withNavigation(Login);
    return (
      <BrowserRouter>
        <Navigation loggedIn={this.state.loggedIn} />
        <Routes>
          <Route
            path="/"
            element={<WaitlistWithNavigation updateAuth={this.updateAuth} />}
          />
          <Route
            path="/leavereview/:business"
            element={
              <LeaveReviewComponent
                isLoggedIn={this.state.loggedIn}
                updateAuth={this.updateAuth}
              />
            }
          />
          <Route
            path="/login"
            element={<LoginWithNavigation updateAuth={this.updateAuth} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/addguest"
            element={
              <AddGuestComponent
                isLoggedIn={this.state.loggedIn}
                updateAuth={this.updateAuth}
              />
            }
          />
          <Route
            path="/reviews"
            element={
              <ReviewsComponent
                isLoggedIn={this.state.loggedIn}
                updateAuth={this.updateAuth}
              />
            }
          />
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
