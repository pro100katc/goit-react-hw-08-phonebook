import { ContactForm } from "pages/Contacts/ContactForm/ContactForm";
import { ContactList } from "pages/Contacts/ContactList/ContactList";
import { Filter } from "pages/Contacts/Filter/Filter";
import styles from 'pages/Contacts/Contacts.module.css'


export const Contacts =()=> {
    return (
        <div>
          <ContactForm/>
          <h2 className={styles.title}>Contacts</h2>
          <Filter/> 
          <ContactList/>
        </div>
      );
}

