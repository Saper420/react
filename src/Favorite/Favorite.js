import styles from './Favorite.module.scss'
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle'
import Card from '../Card/Card.js';
import { useSelector } from 'react-redux'
import { getFavoriteCards } from '../redux/cardsRedux';

const Favorite = () => {

    const cards = useSelector(state => getFavoriteCards(state));
    if(cards.length === 0)
    return (
        <h1 className={styles.nofav}>No cards...</h1>
    );

    return (
        <Container>
            <PageTitle>Favorite</PageTitle>
            <div className={styles.column}>
                <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite}/>)}
                </ul>
            </div>
        </Container>
    );
};

export default Favorite;