// Komponent React
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, removeContact, setFilter } from "./contactsSlice";

function PhonebookApp() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleRemoveContact = (contactId) => {
    dispatch(removeContact(contactId));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <h1>Phonebook</h1>

      {/* Formularz dodawania kontaktu */}
      <form onSubmit={handleAddContact}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone number" />
        <button type="submit">Add Contact</button>
      </form>

      {/* Filtr */}
      <input
        type="text"
        placeholder="Search contacts..."
        value={filter}
        onChange={handleFilterChange}
      />

      {/* Wyświetlanie kontaktów */}
      <ul>
        {contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((contact) => (
            <li key={contact.id}>
              {contact.name}: {contact.phoneNumber}
              <button onClick={() => handleRemoveContact(contact.id)}>
                Remove
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PhonebookApp;
