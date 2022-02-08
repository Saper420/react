import styles from './NavBar.module.scss'
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.main}>
            <Container>
                <ul className={styles.left}>
                    <li><i class="fa fa-bars"></i></li>
                </ul>
                <ul className={styles.right}>
                    <li><NavLink className={({ isActive }) => isActive && styles.linkActive} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive && styles.linkActive} to="/favorite">Favorite</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive && styles.linkActive} to="/about">About</NavLink></li>
                </ul>
            </Container>
        </nav>
    );
};

export default NavBar;