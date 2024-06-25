import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Gallery from './components/Gallery';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route exact path="/packages" element={<Menu/>} />  */}
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/Login" element={<Login />} /> 
        <Route exact path="/signup" element={<Signup />} /> 
        <Route exact path="/todo" element={<TodoList />} /> 
      </Routes>
      {/* <Gallery /> */}
    </div>
  );
}

export default App;
