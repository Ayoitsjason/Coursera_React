import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/layout/Navigation.js";
import Waitlist from "./components/waitlist/Waitlist";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Waitlist />
    </div>
  );
}

export default App;
