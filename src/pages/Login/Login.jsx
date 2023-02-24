import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "redux/auth/auth.thunk";
import styles from 'pages/Login/Login.module.css';
import { selectUserIsLoading } from "redux/selectors";
import { Loader } from "components/Loader/Loader";


export const Login =()=> {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')    

    const dispatch = useDispatch();
    const isLoading = useSelector(selectUserIsLoading)


    const handleLogin =(event) => {
        event.preventDefault();

        const user = {
            email,
            password
        }
        
        dispatch(userLogin(user))
    }


    return <>{isLoading ? <Loader/> :
    <form className={styles.form} onSubmit={handleLogin}>
        <label className={styles.label} htmlFor="email">Email:
            <input className={styles.text} type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label className={styles.label} htmlFor="password">Password:
            <input className={styles.text} type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <button className={styles.button} type="submit">Login</button>
    </form>}</>
}