import { useDispatch } from 'react-redux/es/exports';
import { deleteContact } from 'redux/contacts/contacts.thunk';
import PropTypes from 'prop-types';
import styles from 'pages/Contacts/ContactItem/ContactItem.module.css'

export const ContactItem =({id, contactName, contactNumber})=> {
    
    const dispatch = useDispatch();

    return <li className={styles.contact}> - {contactName}: {contactNumber} 
    <button className={styles.button} type="button" onClick={() => dispatch(deleteContact(id))}>Delete</button> 
    </li>
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    contactName: PropTypes.string.isRequired,
    contactNumber: PropTypes.string.isRequired,
}