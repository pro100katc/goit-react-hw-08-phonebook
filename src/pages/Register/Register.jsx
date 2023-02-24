import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "redux/auth/auth.thunk";
import styles from 'pages/Register/Register.module.css';
import { selectUserIsLoading } from "redux/selectors";
import { Loader } from "components/Loader/Loader";


export const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();
    const isLoading = useSelector(selectUserIsLoading)

    const handleRegister =(event) => {
        event.preventDefault();

        const user = {
            name,
            email,
            password
        }
        
        dispatch(userRegister(user))
    }

    return <>{isLoading ? <Loader/> :
    <form className={styles.form} onSubmit={handleRegister}>
        <label className={styles.label} htmlFor="login">Login:
            <input className={styles.text} type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </label>
        <label className={styles.label} htmlFor="email">Email:
            <input className={styles.text} type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label className={styles.label} htmlFor="password">Password:
            <input className={styles.text} type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <button className={styles.button} type="submit">Register</button>
    </form>}</>
}