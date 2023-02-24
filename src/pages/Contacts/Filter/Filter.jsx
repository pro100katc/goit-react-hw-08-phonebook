import styles from 'pages/Contacts/Filter/Filter.module.css'
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from 'redux/contacts/contacts.slice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
    const handleFilter =(event)=> {
        dispatch(addFilter(event.target.value))
    }

    return <><div className={styles.filterForm}>
    <label htmlFor="filter">Find contacts by name</label>
    <input className={styles.text} type="text" id="filter" name="filter" value={filter} onChange={handleFilter}/>
    </div></>
}