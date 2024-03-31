import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import About from './Pages/About';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import PrivateJobPosting from './Pages/PrivateJobPosting';
import ProtectedRoutes from './routes/ProtectedRoutes';
import JobAd from './Pages/JobAd';
import { JobSearch } from './Pages/JobSearch';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobsearch" element={<JobSearch />} />
          <Route path="/jobAd" element={<JobAd />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/privateJobPost" element={<PrivateJobPosting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
