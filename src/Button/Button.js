import styles from '../SearchForm/SearchForm.module.scss';

const Button = props => {
    return <button onClick={props.onClick} className={styles.button}>{props.children}</button>
}

export default Button;