import Form from '../../components/Form';
import ContactList from "../../components/ContactList";
import Filter from "../../components/Filter";
import styles from './Contactspage.module.css';


function ContactsPage() {
  

  return (
    <div>
        <h1 className={styles.title}>Phonebook</h1>
        <Form />        
        <h2 className={styles.title}>Contacts</h2>
        <Filter/>        
        <ContactList />   
    </div>
  );
}

export default ContactsPage;