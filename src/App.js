import Hero from './Hero/Hero'
import SearchForm from './SearchForm/SearchForm'
import List from './List/List'
import Container from './Container/Container';

const App = () => {
  return (
    <div>
      <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>
    </div>
  );
};

export default App;