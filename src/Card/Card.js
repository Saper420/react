import styles from './Card.module.scss';
import clsx from 'clsx'
import { toggleCardFavorite, removeCard } from '../redux/cardsRedux';
import { useDispatch } from 'react-redux'


const Card = props => {

    const dispatch = useDispatch();

    const favoriteAdd = () => {
        dispatch(toggleCardFavorite(props.id));
        console.log(props.key);
    }

    const removeCards =() => {
        dispatch(removeCard(props.id));
        console.log(props.key);
    }

    return (
        <li className={styles.card}>
            {props.title}
        <div>
            <button onClick={favoriteAdd} className={clsx("fa fa-star-o", styles.button, props.isFavorite && styles.isFavorite)}></button>
            <button onClick={removeCards} className={clsx("fa fa-trash", styles.button, styles.trash)}></button>
        </div>
        </li>
    );
};

export default Card;