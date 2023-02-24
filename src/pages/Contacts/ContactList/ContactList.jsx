import { ContactItem } from "pages/Contacts/ContactItem/ContactItem";
import { useSelector } from "react-redux/es/exports";
import styles from 'pages/Contacts/ContactList/ContactList.module.css'
import { selectContacts, selectError, selectFilter, selectIsLoading } from "redux/selectors";
import { Loader } from "components/Loader/Loader";

export const ContactList = () => {
    let contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading)

    if (filter) {
        contacts = contacts.filter(({name}) => 
        {return name.toLowerCase().indexOf(filter.toLowerCase()) > -1})
    }

    if (error) {alert(error)}
    
    return  <ul className={styles.contactList}>{isLoading && <Loader/>}{contacts && contacts.map(({id, name, number}) => 
    <ContactItem key={id} id={id} contactName={name} contactNumber={number}/>)}
    </ul>
}
