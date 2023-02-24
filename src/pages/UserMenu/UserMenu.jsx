import { useDispatch, useSelector } from "react-redux"
import { userLogout } from "redux/auth/auth.thunk";
import { selectUserName } from "redux/selectors";
import styles from 'pages/UserMenu/UserMenu.module.css';
import { selectUserIsLoading } from "redux/selectors";
import { Loader } from "components/Loader/Loader";


export const UserMenu = () => {

    const userName = useSelector(selectUserName);
    const isLoading = useSelector(selectUserIsLoading)
    const dispatch = useDispatch();

    const handleLogout = () =>{
        dispatch(userLogout())
    }

    return <>{isLoading ? <Loader/> :
    <div className={styles.container}>
        <p className={styles.text}>Welcome, {userName}!</p>
        <button type="button" onClick={handleLogout}>Logout</button>
    </div>}</>
}