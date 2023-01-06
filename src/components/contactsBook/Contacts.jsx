import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getContact } from 'redux/selectors';
import { deleteContacts } from 'redux/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);

  const filter = useSelector(getFilter);
  const normFilter = filter.toLowerCase();
  const filterContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normFilter)
  );

  return (
    <ul>
      {filterContactList.map(({ id, name, phone }) => (
        <li key={id}>
          <p>
            {name}: {phone}
          </p>
          <button
            type="button"
            onClick={() => {
              dispatch(deleteContacts(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
