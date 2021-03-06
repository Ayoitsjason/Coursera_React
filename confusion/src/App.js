import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthenticatedRoute from "./components/authentication/AuthenticatedRoute.js";
import Navigation from "./components/layout/Navigation.js";
import Waitlist from "./components/waitlist/Waitlist";
import Login from "./components/waitlist/Login";
import Signup from "./components/waitlist/Signup";
import Nopage from "./components/Nopage";
import AddGuestComponent from "./components/waitlist/AddGuestComponent";
import ReviewsComponent from "./components/waitlist/ReviewsComponent";
import {
  isUserLoggedIn,
  isUserLoggedInBusiness,
} from "./components/authentication/AuthenticationService";
import LeaveReviewComponent from "./components/waitlist/LeaveReviewComponent";
import SplashComponent from "./components/splash/SplashComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: isUserLoggedIn(),
      currentBusiness: isUserLoggedInBusiness(),
    };
    this.updateAuth = this.updateAuth.bind(this);
  }

  updateAuth() {
    this.setState({
      loggedIn: isUserLoggedIn(),
      currentBusiness: isUserLoggedInBusiness(),
    });
  }

  render() {
    const WaitlistWithNavigation = withNavigation(Waitlist);
    const LoginWithNavigation = withNavigation(Login);
    const SignupWithNavigation = withNavigation(Signup);
    const AddGuestComponentWithNavigation = withNavigation(AddGuestComponent);
    const LeaveReviewComponentWithNavigation =
      withNavigation(LeaveReviewComponent);
    return (
      <BrowserRouter>
        <Navigation loggedIn={this.state.loggedIn} />
        <Routes>
          {!this.state.loggedIn ? (
            <Route path="/" element={<SplashComponent />} />
          ) : (
            <Route
              path="/"
              element={<WaitlistWithNavigation updateAuth={this.updateAuth} />}
            />
          )}
          <Route
            path="/login"
            element={
              <LoginWithNavigation
                updateAuth={this.updateAuth}
                isLoggedIn={this.state.loggedIn}
              />
            }
          />
          <Route path="/signup" element={<SignupWithNavigation />} />
          <Route
            path="/addguest"
            element={
              <AuthenticatedRoute>
                <AddGuestComponentWithNavigation
                  isLoggedIn={this.state.loggedIn}
                  updateAuth={this.updateAuth}
                />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/leavereview/:business"
            element={
              <AuthenticatedRoute>
                <LeaveReviewComponentWithNavigation
                  isLoggedIn={this.state.loggedIn}
                  updateAuth={this.updateAuth}
                />
              </AuthenticatedRoute>
            }
          />
          <Route
            path="/reviews"
            element={
              <AuthenticatedRoute>
                <ReviewsComponent
                  isLoggedIn={this.state.loggedIn}
                  updateAuth={this.updateAuth}
                  currentBusiness={this.state.currentBusiness}
                />
              </AuthenticatedRoute>
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
