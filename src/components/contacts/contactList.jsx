import ContactItem from "./contactItem.jsx";
import styles from "./Contacts.module.scss";
import PropTypes from "prop-types";

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const filteredContacts = contacts.filter((el) =>
    el.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
