import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { useState } from 'react';
//import axios from "axios";
import Loader from './components/loader'; // Adjust the path as necessary
//import './index.css'; // Adjust the path as necessary
//import {useDispatch, useSelector} from "react-redux";
//import { SetPortfolioData } from './redux/rootSlice';

function App() {
  const [showLoading, setShowLoading] = useState(false);
 // const dispatch = useDispatch();



  // Simulate loading with useEffect and setTimeout
  /*useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 500); // Adjust the timeout as needed

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);*/

  return (
    <BrowserRouter>
      {showLoading ? <Loader />  : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;