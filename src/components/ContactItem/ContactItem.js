
import React from "react";
import styles from './ContactItem.module.css';
import { useDeleteContactMutation } from '../../redux/slice';

function ContactItem({ contact }) {
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
    
    return (
        <div className={styles.item}>
            <p className={styles.contact}>{contact.name}: {contact.phone}</p>
        <button onClick={() => {deleteContact(contact.id);}} disabled={isDeleting}>
        {isDeleting ? 'Deleting' : 'Delete'}
      </button>
        </div>             
        
    )
};



export default ContactItem;