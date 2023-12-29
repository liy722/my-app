import './App.css';
import SignInSide from './SignInSide';
import Dash from './Dash';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/dash" component={Dash} />
      <Route path="/" component={SignInSide} />
    </Routes>
    <SignInSide />
  </Router>
  );
}

export default App;
