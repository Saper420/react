import Container from './Container/Container';
import Home from './Home/Home';
import NavBar from './NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import About from './About/About';
import Favorite from './Favorite/Favorite';
import ERR404 from './ERR404/ERR404';
import List from './List/List';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<ERR404 />} />
          <Route path="/list/:listId" element={<List />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;