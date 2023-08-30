
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './assets/components/Layout';
import './App.css'
import SuccessView from './assets/components/SuccessView';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route path="/success" element={<SuccessView/>} />
        <Route path="/error" element={<h1>Error: Email Incorrecto</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
