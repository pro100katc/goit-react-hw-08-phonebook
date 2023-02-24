import { NavLink, Outlet } from "react-router-dom";
import styles from 'components/Layout/Layout.module.css'
import { useSelector } from "react-redux";
import { selectToken } from "redux/selectors";

export const Layout = () => {
    const token = useSelector(selectToken);

    return <div>
        <header>
            <h1 className={styles.title}>Phonebook</h1>
            <nav className={styles.navigation}>
            {token ? 
                <ul className={styles.list}>
                    <li><NavLink className={styles.link} to='/usermenu'>UserMenu</NavLink></li> 
                    <li><NavLink className={styles.link} to='/contacts'>Contacts</NavLink></li> 
                </ul>
                :
                <ul className={styles.list}>
                    <li><NavLink className={styles.link} to='/login'>Login</NavLink></li>
                    <li><NavLink className={styles.link} to='/register'>Register</NavLink></li>
                </ul>}
            </nav>
        </header>
        <main>
            <div className={styles.container}><Outlet/></div>            
        </main>
    </div>
}