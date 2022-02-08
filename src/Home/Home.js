import Hero from '../Hero/Hero'
import Timer from '../Timer/Timer';
import Lists from '../Lists/Lists';
import ListForm from '../ListForm/ListForm';

const Home = () => {
  return (
    <div>
        <Hero/>
        <Timer/>
        <Lists />
        <ListForm />
    </div>
  );
};

export default Home;