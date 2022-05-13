import './App.css';
import {  BrowserRouter as Router,  Routes,  Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home.js'
import Cart from './pages/Cart.js'
import Navbar from './components/Navbar'
import store from './store/store'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
