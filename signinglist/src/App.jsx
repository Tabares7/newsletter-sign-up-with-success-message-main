
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './assets/components/Layout';
import './App.css'
import SuccessView from './assets/components/SuccessView';
import ErrorView from './assets/components/ErrorView';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/success" element={<SuccessView/>} />
        <Route path="/error" element={<ErrorView/>} />
      </Routes>
    </Router>
  );
};

export default App;
