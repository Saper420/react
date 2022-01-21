import Hero from './Hero/Hero'
import SearchForm from './SearchForm/SearchForm'
import List from './List/List'
import Container from './Container/Container';
import Timer from './Timer/Timer';

const App = () => {
  return (
    <div>
      <Container>
        <Hero />
        <SearchForm />
        <Timer/>
        <List />
      </Container>
    </div>
  );
};

export default App;